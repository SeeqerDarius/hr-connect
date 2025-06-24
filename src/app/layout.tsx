import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import PageWrapper from "./components/PageWrapper";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HR Connect Conference 2025",
  description: "Official site for the HR Connect Conference in Accra, Ghana",
  icons: {
    icon: "/favicon.ico", // Default favicon (works)
    // Optional: Uncomment these if you add corresponding files
    // shortcut: "/favicon-16x16.png",
    // apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          <PageWrapper>{children}</PageWrapper>
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}