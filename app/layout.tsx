import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // title: "ANGINTOGEL | Situs Slot dan Togel Online Terbaik",
  title: {
    default: "ANGINTOGEL | Situs Slot dan Togel Online Terbaik",
    template: "%s | ANGINTOGEL",

  },
  description: "ANGINTOGEL adalah situs slot dan togel online terbaik di Indonesia",
  keywords: "angintogel, angin togel, angintogel login, angin togel login, slot, togel, online, terbaik, indonesia",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://anginjitu.asia",
    siteName: "ANGINTOGEL",
    title: "ANGINTOGEL | Situs Slot dan Togel Online Terbaik",
    description: "ANGINTOGEL adalah situs slot dan togel online terbaik di Indonesia",
    images: [
      {
        url: "https://anginjitu.asia/image.jpg",
        width: 800,
        height: 600,
        alt: "ANGINTOGEL | Situs Slot dan Togel Online Terbaik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ANGINTOGEL | Situs Slot dan Togel Online Terbaik",
    description: "ANGINTOGEL adalah situs slot dan togel online terbaik di Indonesia",
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
    }
  },
  applicationName: "ANGINTOGEL",
  // <meta name="google-site-verification" content="GPajvd6niR-HhL83HaQtN0ESDMJp9VkyRO25tjy7C5Y" />
  verification: {
    google: "GPajvd6niR-HhL83HaQtN0ESDMJp9VkyRO25tjy7C5Y",
  },
  metadataBase: new URL("https://anginjitu.asia"),
  alternates: {
    canonical: "https://anginjitu.asia",
    media: {
      android: "https://anginjitu.asia",
      apple: "https://anginjitu.asia",
      windows: "https://anginjitu.asia",
    }
  },
  appLinks: {
    ios:{
      url: "https://anginjitu.asia",
    },
    web:{
      url: "https://anginjitu.asia",
    },
    windows:{
      url: "https://anginjitu.asia",
    }
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
        {/* canonical */}
        <link rel="canonical" href="https://anginjitu.asia" />
        {/* favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
