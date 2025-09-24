import type { Metadata } from "next";
import "./globals.scss";
import { Header } from "@/components/header";

import { ToastContainer } from "react-toastify";

import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], // você pode escolher os pesos que quiser
});


export const metadata: Metadata = {
  title: "House Cleaner",
  description: "Your personal house cleaner assistant",
};

export function ToastProvider() {
  return <ToastContainer position="top-right" autoClose={3000} theme="dark" />;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={roboto.className}>
       <Header/>
       <ToastProvider/>
        {children}
      </body>
    </html>
  );
}
