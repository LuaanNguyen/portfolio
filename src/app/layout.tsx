// layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import EmbedediFrame from "./components/EmbedediFrame";
import { GeneralProvider } from "./contexts/generalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luan Nguyen",
  description: "Luan Nguyen's Personal Portfolio",
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
