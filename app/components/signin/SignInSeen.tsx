"use client";

import Image from "next/image";
import Card from "../ui/Card";
import SignInForm from "./_components/SignInForm";
import SignUpBanner from "@/public/SignupBanner.png";
import { useAuth } from "@/app/context/AuthContext";

const SignInSeen = () => {
  const { login } = useAuth();

  return (
    <div className="p-3 lg:px-20 flex justify-center items-center h-screen">
      <Card className="p-5 w-full max-w-[1279px] mx-auto flex justify-center gap-4">
        <div className=" w-full lg:w-1/2 flex items-center justify-center">
          <SignInForm login={login} />
        </div>
        <div className="w-1/2 hidden md:block">
          <Image alt="signup banner" src={SignUpBanner} />
        </div>
      </Card>
    </div>
  );
};

export default SignInSeen;
