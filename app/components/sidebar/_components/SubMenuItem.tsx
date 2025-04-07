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
    <div>
      <Link
        className={`${
          location === path ? "text-primary-purple" : "text-primary-gray"
        }`}
        href={path}
      >
        {title}
      </Link>
    </div>
  );
};

export default SubMenuItem;
