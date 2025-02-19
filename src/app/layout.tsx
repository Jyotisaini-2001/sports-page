import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./main.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sports Page",
  description: "Sports page frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.svg" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
