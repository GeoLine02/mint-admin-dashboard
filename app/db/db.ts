import MobileIcon from "@/public/MobileIcon.png";
import DesktopIcon from "@/public/DesktopIcon.png";
import TvIcon from "@/public/TVIcon.png";
import TabletIcon from "@/public/TabletIcon.png";
import PakistanFlag from "@/public/PakistanFlag.png";
import GermanyFlag from "@/public/GermanyFlag.png";
import USAFlag from "@/public/USAFlag.png";
import SpainFlag from "@/public/SpainFlag.png";
import IcProjectIcon from "@/public/IcProjectIcon.png";
import PhotoshopIcon from "@/public/PhotoshopProjectIcon.png";
import SlackProjectIcon from "@/public/SlackBotIcon.png";
import LinkedInProjectIcon from "@/public/LinkedInProjectIcon.png";
import IlustratorProjectIcon from "@/public/AdobeIlustratorProjectIcon.png";
import {
  DeviceUsage,
  ImetricsData,
  ITopCountriesData,
} from "../mock/analtyicsData";
import { IProjectithId } from "../types/globalTypes";
import {
  IActionsData,
  IProfileMetrics,
  IUserCourseData,
  IUserTagsData,
} from "../mock/profile/profileOverviewData";

export const users = [
  {
    email: "admin@gmail.com",
    username: "admin",
    password: "123456",
    userId: 1,
    role: "admin",
  },
];

export const metricsData: ImetricsData[] = [
  {
    userId: 1,
    title: "Available to withdraw",
    value: "$1,567.99",
    change: "+10.0%",
    changeType: "increase",
    changeBtnBgColor: "#F4F5F9",
    changeBtnTextColor: "#6E39CB",
    subText: "Wed, Jul 20",
  },
  {
    userId: 1,
    title: "Today Revenue",
    value: "$2,868.99",
    subText: "143 Orders",
    change: "-3.0%",
    changeType: "decrease",
    changeBtnBgColor: "#FFEFEF",
    changeBtnTextColor: "#F93131",
  },
  {
    userId: 1,
    title: "Todays Sessions",
    value: "156k",
    subText: "32k Visitors",
    change: "-3.2%",
    changeType: "increase",
    changeBtnBgColor: "#EEFFEB",
    changeBtnTextColor: "#6E39CB",
  },
  {
    userId: 1,
    title: "Subscribers",
    value: "3,422",
    subText: "$32.48 Average Order",
    change: "+8.3%",
    changeType: "increase",
    changeBtnBgColor: "#F0F9FC",
    changeBtnTextColor: "#6E39CB",
  },
];

export const deviceUsageData: DeviceUsage[] = [
  {
    userId: 1,
    deviceIcon: MobileIcon,
    device: "Mobile",
    usagePercentage: 96.4,
  },
  {
    userId: 1,
    deviceIcon: DesktopIcon,
    device: "Desktop",
    usagePercentage: 2.76,
  },
  {
    userId: 1,
    deviceIcon: TabletIcon,
    device: "Tablet",
    usagePercentage: 0.82,
  },
  {
    userId: 1,
    deviceIcon: TvIcon,
    device: "TV",
    usagePercentage: 12.3,
  },
];

export const topCountries: ITopCountriesData[] = [
  {
    userId: 1,
    countryFlag: PakistanFlag,
    countryName: "Pakistan",
    countryPercentage: 54,
  },
  {
    userId: 1,
    countryFlag: GermanyFlag,
    countryName: "Germany",
    countryPercentage: 32,
  },
  {
    userId: 1,
    countryFlag: USAFlag,
    countryName: "United States",
    countryPercentage: 27,
  },
  {
    userId: 1,
    countryFlag: SpainFlag,
    countryName: "Spain",
    countryPercentage: 25,
  },
];

export const profileMetrics: IProfileMetrics[] = [
  {
    userId: 1,
    value: 635,
    valueChange: 21.01,
    changeType: "increase",
    subTitle: "Average Likes",
  },
  {
    userId: 1,
    value: 123,
    valueChange: 4.39,
    changeType: "increase",
    subTitle: "Comments recived",
  },
  {
    userId: 1,
    value: "23%",
    valueChange: 7.9,
    changeType: "decrease",
    subTitle: "Av. Engagement rate",
  },
];

export const actionsData: IActionsData[] = [
  { userId: 1, actionName: "Profile visits", actionValue: 250 },
  { userId: 1, actionName: "Website clicks", actionValue: 115 },
  { userId: 1, actionName: "Calls", actionValue: 67 },
  { userId: 1, actionName: "Getvdirections", actionValue: 164 },
  { userId: 1, actionName: "Emails", actionValue: 170 },
];

export const userCoursesData: IUserCourseData[] = [
  { userId: 1, title: "VIP Training Course", proggressValue: 40 },
];

export const userTagsData: IUserTagsData[] = [
  { userId: 1, title: "Sport & Health", tags: ["sport", "fit", "health"] },
  { userId: 1, title: "Animals", tags: ["animal", "nature", "health"] },
  { userId: 1, title: "Beauty", tags: ["beauty", "makeup", "fashion"] },
  { userId: 1, title: "Art", tags: ["art", "artist", "love"] },
];

export const projectsData: IProjectithId[] = [
  {
    userId: 1,
    id: 1,
    projectImage: IcProjectIcon,
    projectName: "Design tools",
    projectMembers: ["👩‍🎨", "🧑‍💻", "👨‍💻", "👩🏽‍💻", "🧑🏽‍🎨"],
    projectSlogan:
      "Constantly growing. We’re constantly making mistakes from which we learn and improve",
    dueDate: "02.08.22",
    participantCount: 10,
  },
  {
    userId: 1,
    id: 2,
    projectImage: PhotoshopIcon,
    projectName: "Premium Support",
    projectMembers: ["👨‍🎨", "🧑‍💻", "👨🏽‍💻", "🧑🏾‍🎨", "👨🏻‍💻"],
    projectSlogan:
      "Pink is obviously a better color. Everyone born confident and everything taken away.",
    dueDate: "07.08.22",
    participantCount: 23,
  },
  {
    userId: 1,
    id: 3,
    projectImage: SlackProjectIcon,
    projectName: "Slack Bot",
    projectMembers: ["👨‍💻", "👩‍💻", "🧑‍💻", "👨🏾‍💻"],
    projectSlogan:
      "If everything I did failed which it doesn’t I think that it actually succeeds.",
    dueDate: "10.08.22",
    participantCount: 11,
  },
  {
    userId: 1,
    id: 4,
    projectImage: LinkedInProjectIcon,
    projectName: "Developer First",
    projectMembers: ["👨‍💻", "👩‍💻", "🧑🏽‍💻", "👨🏾‍💻", "👩🏿‍💻"],
    projectSlogan:
      "For standing out. But the time is now to be okay to be the greatest you.",
    dueDate: "20.08.22",
    participantCount: 30,
  },
  {
    userId: 1,
    id: 5,
    projectImage: IlustratorProjectIcon,
    projectName: "Looking great",
    projectMembers: ["👩‍🎨", "🧑🏽‍💻", "👨🏾‍💻", "👩🏻‍💻", "👨‍🎨"],
    projectSlogan:
      "You have the opportunity to play this game of life you need to appreciate every moment.",
    dueDate: "20.08.22",
    participantCount: 30,
  },
  {
    userId: 1,
    id: 6,
    projectImage: PhotoshopIcon,
    projectName: "Premium Support",
    projectMembers: ["👨‍🎨", "🧑‍💻", "👨🏽‍💻", "🧑🏾‍🎨", "👨🏻‍💻"],
    projectSlogan:
      "Pink is obviously a better color. Everyone born confident and everything taken away.",
    dueDate: "07.08.22",
    participantCount: 23,
  },
  {
    userId: 1,
    id: 7,
    projectImage: IlustratorProjectIcon,
    projectName: "Looking great",
    projectMembers: ["👩‍🎨", "🧑🏽‍💻", "👨🏾‍💻", "👩🏻‍💻", "👨‍🎨"],
    projectSlogan:
      "You have the opportunity to play this game of life you need to appreciate every moment.",
    dueDate: "20.08.22",
    participantCount: 30,
  },
  {
    userId: 1,
    id: 8,
    projectImage: IcProjectIcon,
    projectName: "Design tools",
    projectMembers: ["👩‍🎨", "🧑‍💻", "👨‍💻", "👩🏽‍💻", "🧑🏽‍🎨"],
    projectSlogan:
      "Constantly growing. We’re constantly making mistakes from which we learn and improve",
    dueDate: "02.08.22",
    participantCount: 10,
  },
];
