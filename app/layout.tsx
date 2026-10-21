import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import site from "../content/site.json";
import { assetPath } from "../lib/paths";
import "../styles/theme.css";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.metadata.siteUrl),
  title: {
    default: site.metadata.title,
    template: site.metadata.titleTemplate,
  },
  description: site.metadata.description,
  openGraph: {
    type: "website",
    siteName: site.brand.name,
    title: site.metadata.title,
    description: site.metadata.description,
    images: [
      {
        url: assetPath(site.metadata.ogImage),
        width: 1200,
        height: 630,
        alt: site.metadata.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.metadata.title,
    description: site.metadata.description,
    images: [assetPath(site.metadata.ogImage)],
  },
  icons: {
    icon: assetPath("/favicon.svg"),
    shortcut: assetPath("/favicon.svg"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
