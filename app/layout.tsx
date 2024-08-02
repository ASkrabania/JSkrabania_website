import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import './globals.css'

import { Children } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skrabania",
  description: "Biuro  Inzynierskie Jerzy Skrabania",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="noise" />
      <Header />
      {children}
      
      </body>
    </html>
  );
}
