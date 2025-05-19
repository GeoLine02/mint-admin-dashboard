import { jwtDecode } from "jwt-decode";

export const decodeToken = () => {
  const token = localStorage.getItem("accessToken");

  if (!token) return null;

  try {
    const payload = jwtDecode(token);

    return payload;
  } catch {
    return null;
  }
};
