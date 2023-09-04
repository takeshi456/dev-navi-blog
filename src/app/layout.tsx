import "./globals.css";
import type { Metadata } from "next";
import Header from "./Header";
// import Footer from "./Footer";

export const metadata: Metadata = {
  title: "能力開発navi",
  description: "能力開発に役立つ情報を発信します。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
