"use client";

import { AuthProvider } from "@/app/context/AuthContext";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <Sidebar />
      <div className="w-full px-[30px] bg-surface-gray">
        <Header />
        <main>{children}</main>
      </div>
    </AuthProvider>
  );
}
