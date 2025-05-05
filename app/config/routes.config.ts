import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import { SvgIconComponent } from "@mui/icons-material";

export interface ISubMenu {
  title: string;
  accessorKey: string;
  path?: string;
  subMenu?: {
    title: string;
    accessorKey: string;
    path: string;
  }[];
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
        title: "Profile",
        accessorKey: "profile",
        subMenu: [
          {
            title: "Profile overview",
            accessorKey: "profileOverview",
            path: "/pages/profile/profile_overview",
          },
          {
            title: "Teams",
            accessorKey: "teams",
            path: "/pages/profile/teams",
          },
          {
            title: "All projects",
            accessorKey: "allProjects",
            path: "/pages/profile/all_projects",
          },
        ],
      },
      {
        accessorKey: "users",
        title: "Users",
        subMenu: [
          {
            accessorKey: "newUsers",
            path: "/pages/users/new_users",
            title: "New users",
          },
        ],
      },
      {
        accessorKey: "account",
        title: "Account",
        subMenu: [
          {
            accessorKey: "settings",
            title: "Settings",
            path: "/pages/account/settings",
          },
        ],
      },
    ],
  },
];

export default routesConfig;
