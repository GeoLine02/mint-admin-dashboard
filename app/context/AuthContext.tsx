// context/AuthContext.tsx
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useLayoutEffect,
  useCallback,
} from "react";
import { ISigInCredentials, ISignUpCredentials } from "../types/auth";
import { JWTPayload, jwtVerify } from "jose";
import { login as loginService } from "@/app/services/auth";
import { signup as signupService } from "@/app/services/auth";
import { usePathname, useRouter } from "next/navigation";
import { users } from "../db/db";

const secret = new TextEncoder().encode("super-secret-key");

interface AuthContextType {
  user: JWTPayload | null;
  login: (credentials: ISigInCredentials) => Promise<void>;
  signup: (
    credentials: ISignUpCredentials
  ) => Promise<{ status: number; message: string }>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<null | JWTPayload>(null);
  const router = useRouter();
  const location = usePathname();

  const login = async (credentials: ISigInCredentials) => {
    const token = await loginService(credentials);
    const { payload } = await jwtVerify(token, secret);
    setUser(payload);
    localStorage.setItem("accessToken", token);
    router.push("/");
  };

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("accessToken");
    router.replace("/signin");
  }, [router]);

  const signup = async (credentials: ISignUpCredentials) => {
    const res = await signupService(credentials);
    return res;
  };

  useLayoutEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, []);

  useLayoutEffect(() => {
    const checkToken = async () => {
      const publicRoutes = ["/signin", "/signup"];
      const isPublicRoute = publicRoutes.includes(location);

      const token = localStorage.getItem("accessToken");

      if (!token) {
        if (!isPublicRoute) {
          router.replace("/signin");
        }
        return;
      }

      try {
        const { payload } = await jwtVerify(token, secret);
        setUser(payload);

        if (isPublicRoute) {
          router.replace("/");
        }
      } catch (err) {
        console.error("Token verification failed:", err);
        logout();
      }
    };

    checkToken();
  }, [router, logout, location]);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
