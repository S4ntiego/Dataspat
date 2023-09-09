import { Analytics } from "@/components/analytics";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import { Inter_Tight } from "next/font/google";
import path from "path";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const space = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});
const roboto_mono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});
const inter_tight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dataspat",
    template: `%s - Dataspat`,
  },
  description: "Game Pass games with Metacritic Scores",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
    "Game Pass",
    "Metacritic",
    "Xbox",
  ],
  authors: [
    {
      name: "Adam Ksiazek",
      url: "https://adam-ksiazek-portfolio.vercel.app/",
    },
  ],
  creator: "Adam Ksiazek",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Dataspat",
    description: "Game Pass games with Metacritic Scores",
    siteName: "Dataspat",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "bg-background font-inter_tight antialiased",
          inter.variable,
          space.variable,
          roboto_mono.variable,
          inter_tight.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
        <TailwindIndicator />
        <Analytics />
      </body>
    </html>
  );
}
