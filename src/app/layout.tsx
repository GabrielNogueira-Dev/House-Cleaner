import type { Metadata } from "next";
import "./globals.scss";
import { Header } from "@/components/header";

import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], // você pode escolher os pesos que quiser
});


export const metadata: Metadata = {
  title: "House Cleaner",
  description: "Your personal house cleaner assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={roboto.className}>
       <Header/>
        {children}
      </body>
    </html>
  );
}
