import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Mritunjay Sharma — Backend Engineer",
  description:
    "Backend Engineer with 3+ years of experience specialising in scalable distributed systems, high-performance APIs, and AI-powered applications.",
  keywords: ["Backend Engineer", "Python", "Go", "FastAPI", "Django", "Bengaluru"],
  authors: [{ name: "Mritunjay Sharma" }],
  openGraph: {
    title: "Mritunjay Sharma — Backend Engineer",
    description:
      "Building scalable distributed systems and high-performance real-time applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
