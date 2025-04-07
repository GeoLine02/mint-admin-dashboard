import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import { SvgIconComponent } from "@mui/icons-material";
interface ISubMenu {
  title: string;
  accessorKey: string;
  path: string;
}

export interface IRoute {
  title: string;
  accessorKey: string;
  Icon: SvgIconComponent;
  subMenu: ISubMenu[];
}

const routesConfig: IRoute[] = [
  {
    title: "Home",
    accessorKey: "home",
    Icon: HomeIcon,
    subMenu: [
      {
        title: "Dashboard",
        accessorKey: "dashboard",
        path: "/",
      },
      {
        title: "Analytics",
        accessorKey: "analytics",
        path: "/analytics",
      },
    ],
  },
  {
    title: "Pages",
    accessorKey: "pages",
    Icon: DescriptionIcon,
    subMenu: [
      {
        title: "Dashboard",
        accessorKey: "dashboard",
        path: "/",
      },
      {
        title: "Analytics",
        accessorKey: "analytics",
        path: "/analytics",
      },
    ],
  },
];

export default routesConfig;
