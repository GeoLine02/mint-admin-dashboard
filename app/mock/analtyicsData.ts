import { StaticImageData } from "next/image";
import MobileIcon from "@/public/MobileIcon.png";
import DesktopIcon from "@/public/DesktopIcon.png";
import TvIcon from "@/public/TvIcon.png";
import TabletIcon from "@/public/TabletIcon.png";
import PakistanFlag from "@/public/PakistanFlag.png";
import GermanyFlag from "@/public/GermanyFlag.png";
import USAFlag from "@/public/USAFlag.png";
import SpainFlag from "@/public/SpainFlag.png";

interface ImetricsData {
  title: string;
  value: string;
  change: string;
  changeType: "increase" | "decrease";
  changeBtnBgColor: string;
  changeBtnTextColor: string;
  subText: string;
}

export const metricsData: ImetricsData[] = [
  {
    title: "Available to withdraw",
    value: "$1,567.99",
    change: "+10.0%",
    changeType: "increase",
    changeBtnBgColor: "#F4F5F9",
    changeBtnTextColor: "#6E39CB",
    subText: "Wed, Jul 20",
  },
  {
    title: "Today Revenue",
    value: "$2,868.99",
    subText: "143 Orders",
    change: "-3.0%",
    changeType: "decrease",
    changeBtnBgColor: "#FFEFEF",
    changeBtnTextColor: "#F93131",
  },
  {
    title: "Todays Sessions",
    value: "156k",
    subText: "32k Visitors",
    change: "-3.2%",
    changeType: "increase",
    changeBtnBgColor: "#EEFFEB",
    changeBtnTextColor: "#6E39CB",
  },
  {
    title: "Subscribers",
    value: "3,422",
    subText: "$32.48 Average Order",
    change: "+8.3%",
    changeType: "increase",
    changeBtnBgColor: "#F0F9FC",
    changeBtnTextColor: "#6E39CB",
  },
];

interface DeviceUsage {
  deviceIcon: StaticImageData;
  device: string;
  usagePercentage: number;
}

export const deviceUsageData: DeviceUsage[] = [
  {
    deviceIcon: MobileIcon,
    device: "Mobile",
    usagePercentage: 96.4,
  },
  {
    deviceIcon: DesktopIcon,
    device: "Desktop",
    usagePercentage: 2.76,
  },
  {
    deviceIcon: TabletIcon,
    device: "Tablet",
    usagePercentage: 0.82,
  },
  {
    deviceIcon: TvIcon,
    device: "TV",
    usagePercentage: 12.3,
  },
];

interface ITopCountriesData {
  countryFlag: StaticImageData;
  countryName: string;
  countryPercentage: number;
}

export const topCountries: ITopCountriesData[] = [
  {
    countryFlag: PakistanFlag,
    countryName: "Pakistan",
    countryPercentage: 54,
  },
  {
    countryFlag: GermanyFlag,
    countryName: "Germany",
    countryPercentage: 32,
  },
  {
    countryFlag: USAFlag,
    countryName: "United States",
    countryPercentage: 27,
  },
  {
    countryFlag: SpainFlag,
    countryName: "Spain",
    countryPercentage: 25,
  },
];
