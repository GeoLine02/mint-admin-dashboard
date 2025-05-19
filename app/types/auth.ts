export interface ISignUpCredentials {
  fullName: string;
  email: string;
  password: string;
}

export interface ISigInCredentials {
  email: string;
  password: string;
}

export interface DecodedUser {
  userId: number;
  username: string;
  email: string;
  role: "admin" | "user";
}
