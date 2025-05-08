"use client";

import routesConfig, { IRoute } from "@/app/config/routes.config";
import MenuItem from "./MenuItem";
import SubMenuItem from "./SubMenuItem";
import { useState } from "react";
import clsx from "clsx";

const MenuList = () => {
  const [collapsedRoute, setCollapsedRoute] = useState<string | null>(null);

  const handleCollapseRoute = (accessorKey: string) => {
    setCollapsedRoute((prev) => (prev === accessorKey ? null : accessorKey));
  };

  return (
    <div className="h-full">
      {routesConfig.map((menuItem: IRoute) => {
        const { Icon, accessorKey, subMenu, title } = menuItem;
        const isOpen = collapsedRoute === accessorKey;

        return (
          <div key={accessorKey}>
            <div
              onClick={() => handleCollapseRoute(accessorKey)}
              className="flex items-center gap-3 w-full cursor-pointer"
            >
              <MenuItem isActive={isOpen} Icon={Icon} title={title} />
            </div>

            <div
              className={clsx(
                "menu-transition",
                isOpen ? "menu-open" : "menu-closed"
              )}
            >
              <div className="flex flex-col px-4 py-2 gap-2">
                {subMenu.map((sub) => (
                  <SubMenuItem key={sub.accessorKey} item={sub} />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuList;
