"use client";

import { AuthProvider } from "./context/AuthContext";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <div>
      <AuthProvider>{children}</AuthProvider>
    </div>
  );
};

export default Providers;
