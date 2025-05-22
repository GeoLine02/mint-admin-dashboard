import { IBillingInformation } from "../types/account";
import { delay } from "../utils/delayRequest";

export const payNow = async (
  billingInfo: IBillingInformation
): Promise<{ success: boolean; message: string }> => {
  await delay();

  return {
    success: true,
    message: `Payment with ${billingInfo.paymnetMethod.toUpperCase()} processed successfully.`,
  };
};
