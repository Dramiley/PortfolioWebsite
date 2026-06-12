import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import AmbientBackground from "@/components/AmbientBackground";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/data/config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://robin-morgenstern.dev'),
  title: {
    default: 'Robin Morgenstern - Software Engineer',
    template: '%s | Robin Morgenstern',
  },
  description: 'Software engineer working on computer vision, machine learning, and mobile apps. M.Sc. student at TU Dresden.',
  openGraph: {
    title: 'Robin Morgenstern - Software Engineer',
    description: 'Software engineer working on computer vision, machine learning, and mobile apps.',
    siteName: 'Robin Morgenstern',
    url: 'https://robin-morgenstern.dev',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Robin Morgenstern - Software Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Robin Morgenstern - Software Engineer',
    description: 'Software engineer working on computer vision, machine learning, and mobile apps.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased text-foreground`} suppressHydrationWarning>
        {/* Theme Initialization Script to avoid FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) {
                    theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
                  }
                  document.documentElement.classList.toggle('light', theme === 'light');
                } catch (e) {}
              })();
            `
          }}
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Robin Morgenstern',
              jobTitle: 'Software Engineer',
              url: 'https://robin-morgenstern.dev',
              sameAs: [
                siteConfig.social.github,
                siteConfig.social.linkedin,
              ],
              alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'TU Dresden',
              },
              knowsAbout: ['Artificial Intelligence', 'Computer Vision', 'Real-Time Systems', 'Flutter', 'Next.js'],
            }),
          }}
        />

        {/* Skip to content - WCAG 2.4.1 */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>

        <Providers>
          <AmbientBackground />
          <Header />
          <main id="main-content" className="relative z-10 min-h-screen flex flex-col">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
