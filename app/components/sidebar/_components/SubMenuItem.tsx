import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface SubMenuProps {
  path: string;
  title: string;
}

const SubMenuItem = ({ path, title }: SubMenuProps) => {
  const location = usePathname();

  return (
    <Link
      className={`${
        location === path ? "text-primary-purple" : "text-primary-gray"
      } hover:bg-hover-purple transition-all duration-300 rounded-md w-full flex justify-start p-1.5 ml-6`}
      href={path}
    >
      {title}
    </Link>
  );
};

export default SubMenuItem;
