import { IUserFullInfo } from "../types/user";
import { delay } from "../utils/delayRequest";

export const postNewUser = async (
  user: IUserFullInfo
): Promise<{ success: boolean; message: string; data: IUserFullInfo }> => {
  await delay();

  return {
    success: true,
    message: "User successfully created",
    data: user,
  };
};
