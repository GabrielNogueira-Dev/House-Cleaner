import type { Metadata } from "next";
import "./globals.scss";
import { Header } from "@/components/header";

import { Footer } from "@/components/home/footer";

import { ToastContainer } from "react-toastify";

import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], // você pode escolher os pesos que quiser
});


export const metadata: Metadata = {
  title: "House Cleaner",
  description: "Your personal house cleaner assistant",
  keywords: ["cleaning", "cleaner", "house cleaning", "house","move in", "move out"],
  openGraph: {
     title: "House Cleaner",
    images:[`${process.env.NEXT_PUBLIC_URL}/opengraph.png`]
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true
    }
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
    function ToastProvider() {
      return <ToastContainer position="top-right" autoClose={3000} theme="dark" />;
    }

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={roboto.className}>
       <Header/>
       <ToastProvider/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
