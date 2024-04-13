import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components/shared";

const inter = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Dr Sinovuyo Msutu - Psychiatrist ",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
