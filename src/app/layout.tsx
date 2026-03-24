"use client";

import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Navbar/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { ThemeProvider } from "@/providers/ThemeProvider";
import InitialEntryLoader from "@/components/Loader/InitialEntryLoader";
import ContentWrapper from "@/components/Loader/ContentWrapper";

const syne = Syne({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
           <InitialEntryLoader /> 
           <Navbar />
           
           <main className="grow">
             {/* This will handle the skeleton for ALL pages */}
             <ContentWrapper>
               {children}
             </ContentWrapper>
           </main>
           
           <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
