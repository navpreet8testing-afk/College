import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shivaji College | Shaping Futures. Building Leaders.",
  description:
    "Shivaji College (Estd. 1962) - A legacy of academic excellence, innovation and holistic development. NAAC A+ accredited institution offering undergraduate, postgraduate and research programs.",
  keywords: [
    "Shivaji College",
    "NAAC A+",
    "higher education",
    "admissions",
    "research",
    "undergraduate programs",
    "postgraduate programs",
  ],
  authors: [{ name: "Shivaji College" }],
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-white text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
