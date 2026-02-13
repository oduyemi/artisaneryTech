import { ReactNode } from "react";
import { Lato } from "next/font/google"
import ClientSideLayout from "./ClientSideLayout";
import "./globals.css";
import type { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  metadataBase: new URL("https://artisanery.tech"),
  title: {
    default: "Artisanery Tech | Product Engineering & Scalable Software Systems",
    template: "%s | Artisanery Tech",
  },
  description:
    "US-based product engineering company specializing in scalable system architecture, MVP development, platform evolution, and technical SEO for SaaS and enterprise platforms.",
  openGraph: {
    title: "Artisanery Tech",
    description:
      "Product-focused engineering for scalable digital platforms.",
    url: "https://artisanery.tech",
    siteName: "Artisanery Tech",
    type: "website",
  },
};


const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
})



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={lato.variable}>
      <Head>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon16.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon32.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="shortcut icon" href="/favicon.ico" />

          {/* Android Icons */}
          <link rel="icon" type="image/png" sizes="192x192" href="/logo192.png" />
          <link rel="icon" type="image/png" sizes="512x512" href="/logo512.png" />
      </Head>
      <body>
      <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Artisanery Tech",
                url: "https://artisanery.tech",
                logo: "https://artisanery.tech/images/logo/logotext.png",
                description:
                  "Product-focused engineering firm specializing in scalable software systems, MVP builds, system architecture design, and technical SEO foundations.",
                sameAs: [],
              }),
            }}
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Artisanery Tech",
                url: "https://artisanery.tech",
              }),
            }}
          />

            <ClientSideLayout>
              {children}
            </ClientSideLayout>
      </body>
    </html>
  );
}