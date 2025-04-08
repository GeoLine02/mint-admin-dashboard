"use client";

import routesConfig, { IRoute } from "@/app/config/routes.config";
import MenuItem from "./MenuItem";
import SubMenuItem from "./SubMenuItem";
import { useState } from "react";
import clsx from "clsx";

const MenuList = () => {
  const [collapsedRoute, setCollapsedRoute] = useState<string | null>(null);

  const handleCollapseRoute = (routeTitle: string) => {
    setCollapsedRoute((prev) => (prev === routeTitle ? null : routeTitle));
  };

  return (
    <div>
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

            {/* Submenu with falling animation */}
            <div
              className={clsx(
                "submenu-transition",
                isOpen ? "submenu-open" : "submenu-closed"
              )}
            >
              <div className="flex flex-col items-start px-4 py-2 gap-2">
                {subMenu.map((subMenuItem) => (
                  <SubMenuItem
                    key={subMenuItem.accessorKey}
                    path={subMenuItem.path}
                    title={subMenuItem.title}
                  />
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
