import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";
import { ISubMenu } from "@/app/config/routes.config";

interface Props {
  item: ISubMenu;
}

const SubMenuItem = ({ item }: Props) => {
  const location = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const hasChildren = item.subMenu && item.subMenu.length > 0;
  const isActive = location === item.path;

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="w-full">
      <div
        onClick={hasChildren ? toggle : undefined}
        className={clsx(
          "w-full flex justify-start items-center cursor-pointer rounded-md px-3 py-1.5 transition-all duration-300",
          isActive ? "text-primary-purple" : "text-primary-gray",
          hasChildren && "hover:bg-hover-purple"
        )}
      >
        {item.path ? (
          <Link href={item.path} className="w-full">
            {item.title}
          </Link>
        ) : (
          <span>{item.title}</span>
        )}
      </div>

      {/* Animated submenu dropdown */}
      {hasChildren && (
        <div
          className={clsx(
            "submenu-transition ml-4", // <-- indent nested items
            isOpen ? "submenu-open" : "submenu-closed"
          )}
        >
          <div className="flex flex-col items-start px-2 py-1 gap-2">
            {item.subMenu!.map((subItem) => (
              <SubMenuItem key={subItem.accessorKey} item={subItem} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SubMenuItem;
