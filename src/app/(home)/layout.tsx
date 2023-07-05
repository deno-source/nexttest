import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "首页",
  description: "官方首页",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh_CN">
      <body className={inter.className}>
      
      {children}
      </body>
    </html>
  );
}
