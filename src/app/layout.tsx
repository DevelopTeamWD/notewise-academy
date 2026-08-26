import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import { ToastContainer } from "react-toastify";
import SmoothScroll from "@/components/providers/SmoothScroll";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Notewise Academy - Learn Music The Right Way",
  description:
    "Expert-led lessons in piano, guitar, violin, and vocals for children and adults, online and in-person. Your personalised musical journey starts here.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <ToastContainer position="top-right" autoClose={4000} />
      </body>
    </html>
  );
}
