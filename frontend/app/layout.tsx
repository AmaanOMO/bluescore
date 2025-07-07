import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavigationLoader } from "./components/pagelayout/NavigationLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BlueScore - UB Grade Distribution Explorer",
  description: "Explore grade distributions for courses, instructors, and departments at the University at Buffalo. Make informed decisions when registering for classes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationLoader />
        {children}
      </body>
    </html>
  );
}
