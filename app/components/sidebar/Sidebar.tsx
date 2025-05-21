"use client";

import Image from "next/image";
import Logo from "@/public/logo.svg";

import MenuList from "./_components/MenuList";
import { usePathname } from "next/navigation";
const Sidebar = () => {
  const pathName = usePathname();
  console.log(pathName);
  if (pathName === "/signin" || pathName === "/signup") return null;

  return (
    <div className="min-w-[218px] max-w-[240px] w-full h-full">
      <div className="p-[50px]">
        <Image src={Logo} alt="mint logo" />
      </div>
      <section className="h-full">
        <MenuList />
      </section>
    </div>
  );
};

export default Sidebar;
