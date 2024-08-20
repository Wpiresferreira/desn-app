"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Top } from "./components/top";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className=" bg-color30 h-screen">
          <div
          className="animate-up-normal"
          >
            <Top />
          </div>
          {children}
        </div>
        <Footer></Footer>
      </body>
    </html>
  );
}
