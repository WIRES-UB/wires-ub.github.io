// This is the root layout — it wraps every page on the site.
// It adds the Navbar at the top and the Footer at the bottom automatically.

import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Load the Inter font from Google Fonts and apply it to the whole site
const inter = Inter({ subsets: ["latin"] });

// Default page metadata shown in the browser tab and search engines
export const metadata: Metadata = {
  title: "WiRES Lab — University at Buffalo",
  description:
    "Wireless Robotics and Embedded Systems Lab at the University at Buffalo. Research in wireless localization, robotics, digital twins, and privacy.",
};

// Props type for the layout — children is whatever page content Next.js passes in
type LayoutProps = {
  children: React.ReactNode;
};

// RootLayout is the shell that surrounds every page
export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        {/* Top navigation bar — fixed, always visible */}
        <Navbar />

        {/* pt-16 adds padding so page content starts below the fixed navbar */}
        <main className="pt-16 min-h-screen">{children}</main>

        {/* Footer at the bottom of every page */}
        <Footer />
      </body>
    </html>
  );
}
