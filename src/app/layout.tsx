// layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import { Analytics } from "@vercel/analytics/next";
import { GeneralProvider } from "./contexts/generalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luan Nguyen",
  description: "Intern @ AWS",
  keywords: [
    "Luan Nguyen",
    "Software Engineer",
    "Full Stack Developer",
    "Web Development",
    "AI/ML",
    "Cloud Computing",
  ],
  creator: "Luan Nguyen",
  authors: [{ name: "Luan Nguyen" }],
  icons: {
    icon: "/terminal.svg",
    shortcut: "/luan_aws.png",
    apple: [
      { url: "/luan_aws.png" },
      { url: "/luan_aws.png", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://luannguyen.net",
    title: "Luan Nguyen | Software Engineer",
    description:
      "Full-stack software engineer specializing in web development, AI/ML, and cloud solutions.",
    siteName: "Luan Nguyen's Portfolio",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/Luan.jpg`,
        width: 1200,
        height: 630,
        alt: "Luan Nguyen Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luan Nguyen | Software Engineer",
    description:
      "Full-stack software engineer specializing in web development, AI/ML, and cloud solutions.",
    images: [`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/Luan.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={inter.className}>
        <GeneralProvider>
          <Navigation />
          {children}
          <Analytics />
        </GeneralProvider>
      </body>
    </html>
  );
}
