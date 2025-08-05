import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
// import "@/app/globals.css";
const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Store",
  description: "Ecommerce site build by Next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} } `}>{children}</body>
    </html>
  );
}
