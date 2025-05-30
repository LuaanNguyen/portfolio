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
  keywords: ["Luan Nguyen", "Software Engineer", "AI/ML", "Cloud Computing"],
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
        url: `/luan_aws.png`,
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
    images: [`/luan_aws.png`],
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
        {/* Structured data for rich Google search results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Luan Nguyen",
              url: "https://luannguyen.net",
              image: "https://luannguyen.net/luan_aws.png",
              sameAs: [
                "https://www.linkedin.com/in/luanthiennguyen",
                "https://github.com/LuaanNguyen",
              ],
              jobTitle: "Software Engineer",
              worksFor: {
                "@type": "Organization",
                name: "AWS",
              },
              description:
                "Full-stack software engineer at AWS, passionate about web development, AI/ML, and cloud solutions.",
            }),
          }}
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
