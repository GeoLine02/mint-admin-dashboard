export interface IPersonalInformation {
  firstName?: string;
  lastName?: string;
  email?: string;
  username?: string;
  phone?: string;
  city?: string;
  country?: string;
  zipCode?: string;
  bio?: string;
  image?: File | null;
}

export interface IBillingInformation {
  paymnetMethod: "visa" | "paypal";
  cardHolderName: string;
  billingAddress: string;
  zipCode: string;
  city: string;
}

export interface ISecuritySettings {
  currnetPassword: string;
  newPassword: string;
  confirmPassword: string;
}
