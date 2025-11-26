import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AmbientBackground from "@/components/AmbientBackground";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { EffectsProvider } from "@/context/EffectsContext";
import { EffectsToggle } from "@/components/ui/EffectsToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Robin Morgenstern",
  description: "Portfolio of Robin Morgenstern",
  openGraph: {
    title: "Robin Morgenstern | Portfolio",
    description: "Portfolio of Robin Morgenstern - Software Engineer",
    siteName: "Robin Morgenstern Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Robin Morgenstern Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Robin Morgenstern | Portfolio",
    description: "Portfolio of Robin Morgenstern - Software Engineer",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-slate-200 selection:bg-orange-500/30`}>
        <EffectsProvider>
          <ScrollProgress />
          <AmbientBackground />
          <main className="relative z-10 min-h-screen flex flex-col">
            {children}
          </main>
          <EffectsToggle />
        </EffectsProvider>
      </body>
    </html>
  );
}
