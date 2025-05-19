// services/auth.ts
import { SignJWT } from "jose";
import { ISigInCredentials } from "../types/auth";
import { users } from "../mock/fakeUsers/fakeUsers";

const secret = new TextEncoder().encode("super-secret-key");

export const login = async (credentials: ISigInCredentials) => {
  const user = users.find(
    (u) => u.email === credentials.email && u.password === credentials.password
  );

  if (!user) {
    throw new Error("Invalid email or password");
  }
  const token = await new SignJWT({
    userId: user.userId,
    role: user.role,
    email: user.email,
    username: user.username,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(secret);

  localStorage.setItem("accessToken", JSON.stringify(token));

  return token;
};
