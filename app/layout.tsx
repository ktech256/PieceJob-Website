import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "PieceJob | Global Multi-Service Marketplace",
    template: "%s | PieceJob",
  },
  description: "The world's most advanced marketplace for piece-jobs. Verified pros for cleaning, technical support, child care, and more.",
  keywords: ["PieceJob", "Local Services", "Verified Providers", "Service Marketplace", "Handyman", "Care Services"],
  authors: [{ name: "PieceJob Team" }],
  creator: "PieceJob Global",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://piecejob.com",
    siteName: "PieceJob",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PieceJob Global",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-white text-neutral-dark`}>
        {children}
      </body>
    </html>
  );
}
