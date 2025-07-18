import type { Metadata } from "next";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });

export const metadata: Metadata = {
  title: "Marcelo Bensabath",
  description: "Technical Artist & Gameplay Programmer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
