/**
 * @file github.ts
 * @description Fetches the latest push event from a GitHub user's public activity.
 * Uses the GitHub Events API with no authentication (60 req/hr limit).
 * Designed to be called at build time with ISR revalidation.
 */

const GITHUB_USERNAME = 'Dramiley';
const GITHUB_API = `https://api.github.com/users/${GITHUB_USERNAME}/events?per_page=10`;

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
        const headers: HeadersInit = {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'PortfolioWebsite',
        };

        if (process.env.GITHUB_TOKEN) {
            headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
        }

        const res = await fetch(GITHUB_API, {
            headers,
            next: { revalidate: 3600 }, // ISR: revalidate every hour
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
