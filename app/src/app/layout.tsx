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
  title: "Robin Morgenstern - Software Engineer",
  description: "Software engineer working across AI, computer vision, and real-time systems. B.Sc. in Computer Science from TU Dresden.",
  openGraph: {
    title: "Robin Morgenstern - Software Engineer",
    description: "Building at the intersection of AI, computer vision, and real-time systems.",
    siteName: "Robin Morgenstern",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Robin Morgenstern - Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Robin Morgenstern - Software Engineer",
    description: "Building at the intersection of AI, computer vision, and real-time systems.",
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
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased text-foreground`}>
        <EffectsProvider>
          <ScrollProgress />
          <AmbientBackground />
          <Header />
          <main className="relative z-10 min-h-screen flex flex-col">
            {children}
          </main>
          <EffectsToggle />
        </EffectsProvider>
      </body>
    </html>
  );
}
