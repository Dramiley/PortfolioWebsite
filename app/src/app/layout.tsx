import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import AmbientBackground from "@/components/AmbientBackground";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { EffectsProvider } from "@/context/EffectsContext";
import { EffectsToggle } from "@/components/ui/EffectsToggle";
import { Header } from "@/components/Header";

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
    default: 'Robin Morgenstern — Software Engineer',
    template: '%s | Robin Morgenstern',
  },
  description: 'Software engineer building at the intersection of AI, computer vision, and real-time systems. B.Sc. in Computer Science from TU Dresden.',
  openGraph: {
    title: 'Robin Morgenstern — Software Engineer',
    description: 'Building at the intersection of AI, computer vision, and real-time systems.',
    siteName: 'Robin Morgenstern',
    url: 'https://robin-morgenstern.dev',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Robin Morgenstern — Software Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Robin Morgenstern — Software Engineer',
    description: 'Building at the intersection of AI, computer vision, and real-time systems.',
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
  other: {
    'theme-color': '#020617',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased text-foreground`}>
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
                'https://github.com/Dramiley',
                'https://www.linkedin.com/in/robin-morgenstern-a910a5239/',
              ],
              alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'TU Dresden',
              },
              knowsAbout: ['Artificial Intelligence', 'Computer Vision', 'Real-Time Systems', 'Flutter', 'Next.js'],
            }),
          }}
        />

        {/* Skip to content — WCAG 2.4.1 */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>

        <EffectsProvider>
          <ScrollProgress />
          <AmbientBackground />
          <Header />
          <main id="main-content" className="relative z-10 min-h-screen flex flex-col">
            {children}
          </main>
          <EffectsToggle />
        </EffectsProvider>
      </body>
    </html>
  );
}
