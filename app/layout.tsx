import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ANGINTOGEL | Situs Slot dan Togel Online Terbaik",
  description: "ANGINTOGEL adalah situs slot dan togel online terbaik di Indonesia",
  keywords: "slot, togel, online, terbaik, indonesia",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "togel--angintogel.us-central1.hosted.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "ANGINTOGEL | Situs Slot dan Togel Online Terbaik",
    description: "ANGINTOGEL adalah situs slot dan togel online terbaik di Indonesia",
  },
  robots: {
    index: true,
    follow: true,
  },
  applicationName: "ANGINTOGEL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
