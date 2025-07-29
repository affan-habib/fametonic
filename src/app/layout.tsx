import type { Metadata } from "next";
import { Urbanist, Figtree } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Fametonic - Turn Social Media Into a Profitable Career",
  description: "Discover your way to success with Fametonic. Start growing your influence, create viral content, and learn from expert-led courses designed for aspiring influencers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} ${figtree.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
