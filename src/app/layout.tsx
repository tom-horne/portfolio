import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "../components/navbar";
import Footer from "@/components/footer";
import { Poppins } from "next/font/google";

const inter = Poppins({ subsets: ["devanagari"], weight: ["200"] });

export const metadata: Metadata = {
  title: "Tom Horne Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: "0px" }}>
        <NavBar title="tomhorne.co.uk" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
