// layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import EmbedediFrame from "./components/EmbedediFrame";
import { GeneralProvider } from "./contexts/generalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luan Nguyen's Portfolio",
  description:
    "Full-stack software engineer specializing in web development, AI/ML, and cloud solutions. Explore my projects and experience in building innovative digital solutions.",
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
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: [
      { url: "/favicon.svg" },
      { url: "/favicon.svg", sizes: "180x180", type: "image/svg+xml" },
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
        url: "/Luan.jpg", // Add your preview image to public folder
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
    images: ["/Luan.jpg"],
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
          {/* <EmbedediFrame /> */}
        </GeneralProvider>
      </body>
    </html>
  );
}
