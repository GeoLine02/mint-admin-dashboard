import { SignJWT } from "jose";

const secret = new TextEncoder().encode("your-256-bit-secret");

type PayloadType = {
  fullName: string;
  email: string;
  password: string;
};

export async function createToken(payload: PayloadType) {
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("3h")
    .sign(secret);

  return token;
}
