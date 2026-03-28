// layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://luannguyen.net"),
  title: "Luan Nguyen",
  description: "Software Engineer",
  keywords: ["Luan Nguyen", "Software Engineer", "AI/ML", "Cloud Computing"],
  creator: "Luan Nguyen",
  authors: [{ name: "Luan Nguyen" }],
  icons: {
    icon: "/luan_aws.png",
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
      "Software Engineer",
    siteName: "Luan Nguyen's Portfolio",
    images: [
      {
        url: "/portfolio_highres.png",
        width: 1920,
        height: 1440,
        alt: "Luan Nguyen Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luan Nguyen | Software Engineer",
    description:
      "Software Engineer",
    images: ["/portfolio_highres.png"],
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
  alternates: {
    canonical: "https://luannguyen.net",
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
        {/* Structured data for rich Google search results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Luan Nguyen",
              url: "https://luannguyen.net",
              image: "https://luannguyen.net/portfolio_highres.png",
              sameAs: [
                "https://www.linkedin.com/in/luanthiennguyen",
                "https://github.com/LuaanNguyen",
              ],
              jobTitle: "Software Engineer Intern",
              worksFor: {
                "@type": "Organization",
                name: "FOX Corporation",
              },
              description:
                "Software Engineer",
            }),
          }}
        />
      </head>
      <body className="font-sans">
        <header>
          <Navigation />
        </header>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
