/**
 * @file github.ts
 * @description Fetches the latest push event from a GitHub user's public activity.
 * Uses the GitHub Events API with no authentication (60 req/hr limit).
 * Designed to be called at build time with ISR revalidation.
 */

const GITHUB_USERNAME = 'Dramiley';
const GITHUB_REST_API = `https://api.github.com/users/${GITHUB_USERNAME}/events?per_page=100`;
const GITHUB_GRAPHQL_API = 'https://api.github.com/graphql';

export interface GitHubActivity {
    lastPushAt: string | null; // ISO 8601 timestamp
    repo: string | null;
}

/**
 * Fetches the most recent PushEvent from the user's GitHub activity.
 * If GITHUB_TOKEN is provided in .env, it can fetch private commits too.
 */
export async function getLatestGitHubActivity(): Promise<GitHubActivity> {
    try {
        const token = process.env.GITHUB_TOKEN;

        // If a token is provided, prefer GraphQL API.
        // It properly supports fine-grained PATs for private repos
        // and has a higher rate limit (5000 req/hr).
        if (token) {
            const graphqlQuery = {
                query: `
                    query {
                        user(login: "${GITHUB_USERNAME}") {
                            contributionsCollection {
                                commitContributionsByRepository(maxRepositories: 10) {
                                    repository {
                                        name
                                    }
                                    contributions(first: 1) {
                                        nodes {
                                            occurredAt
                                        }
                                    }
                                }
                            }
                        }
                    }
                `
            };

            const res = await fetch(GITHUB_GRAPHQL_API, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    'User-Agent': 'PortfolioWebsite',
                },
                next: { revalidate: 600 }, // Revalidate every 10 minutes when authenticated
            });

            if (res.ok) {
                const data = await res.json();
                const repos = data?.data?.user?.contributionsCollection?.commitContributionsByRepository;
                
                if (repos && repos.length > 0) {
                    // Extract all commits and find the absolute latest one
                    const commits = repos.flatMap((r: any) => {
                        const occurredAt = r.contributions?.nodes?.[0]?.occurredAt;
                        if (!occurredAt) return [];
                        return [{
                            repo: r.repository.name,
                            lastPushAt: occurredAt,
                            time: new Date(occurredAt).getTime()
                        }];
                    });

                    if (commits.length > 0) {
                        commits.sort((a: any, b: any) => b.time - a.time);
                        return {
                            lastPushAt: commits[0].lastPushAt,
                            repo: commits[0].repo,
                        };
                    }
                }
            }
            // If GraphQL fails (e.g. token lacks permissions), fallback to REST
        }

        const headers: HeadersInit = {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'PortfolioWebsite',
        };

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const res = await fetch(GITHUB_REST_API, {
            headers,
            // Revalidate less frequently (every 10 minutes)
            next: { revalidate: token ? 600 : 3600 }, 
        });

        if (!res.ok) {
            return { lastPushAt: null, repo: null };
        }

        const events = await res.json();

        // Find the most recent PushEvent
        const pushEvent = events.find(
            (e: { type: string }) => e.type === 'PushEvent'
        );

        if (pushEvent) {
            return {
                lastPushAt: pushEvent.created_at,
                repo: pushEvent.repo?.name?.split('/')[1] || null,
            };
        }

        return { lastPushAt: null, repo: null };
    } catch {
        return { lastPushAt: null, repo: null };
    }
}
