export type UserCreationStepType =
  | "userInfo"
  | "address"
  | "socials"
  | "success";

export interface IUserCreationSteps {
  accessorKey: string;
  title: string;
}

export interface IUserInfoStep {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export interface IUserAddressStep extends IUserInfoStep {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface IUserSocialsStep extends IUserAddressStep {
  twitter: string;
  linkedin: string;
  facebook: string;
  instagram: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IUserFullInfo extends IUserSocialsStep {}
