import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import { Lato } from "next/font/google";
export const metadata: Metadata = {
  title: "Mint",
  description: "Mint Admin panel",
};

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"], // regular, medium, bold
  variable: "--font-lato",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex min-h-screen ${lato.variable} font-lato`}>
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
