"use client";

import { usePathname } from "next/navigation";
import Search from "./_components/Search";
import getCapitalizedPathName from "@/app/utils/locationPathCapitalizer";

const Header = () => {
  const pathName = usePathname();

  return (
    <header className="w-full py-[30px]">
      <div className="w-1/2 flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-primary-purple">
          {getCapitalizedPathName(pathName)}
        </h1>
        <Search />
      </div>
    </header>
  );
};

export default Header;
