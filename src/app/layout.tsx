import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Porofolio Site",
  description: "ぼくのポートフォリオサイト",
  icons: {
    icon: "/にわとりのアイコン.png", // 通常のアイコン
    shortcut: "/にわとりのアイコン.png", // ショートカットアイコン
    apple: "/にわとりのアイコン.png", // Apple Touchアイコン
  },
};

export const revalidate = 60;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"max-w-[1248px] mx-auto px-6 font-NotoSansJP"}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
