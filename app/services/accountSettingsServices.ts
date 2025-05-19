import { IPersonalInformation } from "../types/account";
import { delay } from "../utils/delayRequest";

export const publishPersonalInfo = async (
  info: IPersonalInformation
): Promise<{ success: boolean; data: IPersonalInformation }> => {
  await delay();

  return {
    success: true,
    data: info,
  };
};
