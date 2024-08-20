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
    <html lang="en" className="max-w-[430px] min-w-[380px]">
      <body className={`${inter.className}`}>
        <div className=" bg-color30 h-screen min-h-[720px] max-w-[430px]">
          <div
          className="animate-up-normal max-w-[430px]"
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
