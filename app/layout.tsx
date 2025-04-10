import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";

export const metadata: Metadata = {
  title: "Mint",
  description: "Mint Admin panel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen">
        <Sidebar />
        <div className="w-full px-[30px] pb-[77px] bg-surface-gray">
          <Header />
          <main>{children}</main>
          <footer></footer>
        </div>
      </body>
    </html>
  );
}
