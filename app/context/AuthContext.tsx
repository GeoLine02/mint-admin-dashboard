// context/AuthContext.tsx
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useLayoutEffect,
  useCallback,
} from "react";
import {
  ISigInCredentials,
  //   ISignUpCredentials,
} from "../types/auth";
import { JWTPayload, jwtVerify } from "jose";
import { login as loginService } from "@/app/services/auth";
import { useRouter } from "next/navigation";

const secret = new TextEncoder().encode("super-secret-key");

interface AuthContextType {
  user: JWTPayload | null;
  login: (credentials: ISigInCredentials) => Promise<void>;
  //   signup: (credentials: ISignUpCredentials) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<null | JWTPayload>(null);
  const [loading, setLoading] = useState(true); // new
  const router = useRouter();

  const login = async (credentials: ISigInCredentials) => {
    const token = await loginService(credentials);
    const { payload } = await jwtVerify(token, secret);
    setUser(payload);
    localStorage.setItem("accessToken", token); // <— make sure you save it
  };

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("accessToken");
    router.replace("/signin");
  }, [router]);

  useLayoutEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        router.replace("/signin");
        setLoading(false);
        return;
      }

      try {
        const { payload } = await jwtVerify(token, secret);
        setUser(payload);
      } catch (err) {
        console.error("Token verification failed:", err);
        logout();
      } finally {
        setLoading(false); // stop blocking render
      }
    };

    checkToken();
  }, [router, logout]);

  if (loading) return null; // Prevent initial flicker

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
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
