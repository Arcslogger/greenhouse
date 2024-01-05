import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "garden testing",
  description: "A playground for creating better gardening infrastructure",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-midnight">
      <body className={inter.className}>
        <div className="text-shimmer">{children}</div>
      </body>
    </html>
  );
}
