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
  title: {
    default: site.metadata.title,
    template: site.metadata.titleTemplate,
  },
  description: site.metadata.description,
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
