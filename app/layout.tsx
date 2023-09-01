import { Analytics } from "@/components/analytics";
import { SiteHeader } from "@/components/site-header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Jura } from "next/font/google";

const inter = Inter({variable: "--font-inter", subsets: ["latin"] });
const jura = Jura({variable: "--font-jura", subsets: ["latin"]})

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
    <html lang="en">
      <head />
      <body
        className={cn(
          "dark min-h-screen bg-background font-inter antialiased", inter.variable, jura.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
         <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">{children}</div>
            </div>
        </ThemeProvider>
        <TailwindIndicator />
        <Analytics />
      </body>
    </html>
  );
}
