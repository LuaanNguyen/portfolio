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
    icon: [{ url: "/gradient.jpeg", type: "image/jpeg" }],
    shortcut: "/gradient.jpeg",
    apple: [{ url: "/gradient.jpeg", type: "image/jpeg" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://luannguyen.net",
    title: "Luan Nguyen",
    description: "Software Engineer",
    siteName: "Luan Nguyen's Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Luan Nguyen Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luan Nguyen",
    description: "Software Engineer",
    images: ["/og-image.png"],
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
              description: "Software Engineer",
            }),
          }}
        />
      </head>
      <body className="font-sans">
        <header className="sticky top-0 z-50 bg-gradient-to-b from-spotify-black via-spotify-black/95 to-transparent pb-2">
          <Navigation />
        </header>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
