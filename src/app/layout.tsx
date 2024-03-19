import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Drawer from "./components/drawer";

// Importing necessary types and modules

// Define Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] });

// Define metadata for the page
export const metadata: Metadata = {
  title: "Go India Stocks Assignment", // Title of the page
  description: "Developed by Madhuresh Verma", // Description of the page
};

// RootLayout component to wrap the entire application
export default function RootLayout({
  children, // Child components to be rendered within RootLayout
}: Readonly<{
  children: React.ReactNode; // Define children prop type
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex h-screen overflow-hidden">
          <Drawer />
          {children}
        </main>
      </body>
    </html>
  );
}
