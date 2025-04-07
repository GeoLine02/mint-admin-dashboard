"use client";

import routesConfig, { IRoute } from "@/app/config/routes.config";
import MenuItem from "./MenuItem";
import SubMenuItem from "./SubMenuItem";
import { useState } from "react";

const MenuList = () => {
  const [collapsedRoute, setCollapsedRoute] = useState<string | null>(null);

  const handleCollapseRoute = (routeTitle: string) => {
    setCollapsedRoute(routeTitle);
  };

  return (
    <div>
      {routesConfig.map((menuItem: IRoute) => {
        const { Icon, accessorKey, subMenu, title } = menuItem;
        return (
          <div key={accessorKey}>
            <div
              onClick={() => handleCollapseRoute(accessorKey)}
              className="flex items-center gap-3 w-full"
            >
              <MenuItem
                isActive={accessorKey === collapsedRoute}
                Icon={Icon}
                title={title}
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              {collapsedRoute === accessorKey &&
                subMenu.map((subMenuItem) => (
                  <SubMenuItem
                    key={subMenuItem.accessorKey}
                    path={subMenuItem.path}
                    title={subMenuItem.title}
                  />
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuList;
