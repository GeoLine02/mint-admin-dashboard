import { metricsData } from "../db/db";
import {
  DeviceUsage,
  deviceUsageData,
  ImetricsData,
  ITopCountriesData,
  topCountries,
} from "../mock/analtyicsData";
import { delay } from "../utils/delayRequest";

export const getUserMetrics = async (
  userId: number
): Promise<ImetricsData[]> => {
  await delay();
  return metricsData.filter((m) => m.userId === userId);
};
export const getUserDeviceUsage = async (
  userId: number
): Promise<DeviceUsage[]> => {
  await delay();
  return deviceUsageData.filter((d) => d.userId === userId);
};

export const getUserTopCountries = async (
  userId: number
): Promise<ITopCountriesData[]> => {
  await delay();
  return topCountries.filter((c) => c.userId === userId);
};
