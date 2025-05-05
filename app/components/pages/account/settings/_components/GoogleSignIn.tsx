import Image from "next/image";
import React from "react";
import GoogleIcon from "@/public/Google.svg";
import Button from "@/app/components/ui/Button";
import Card from "@/app/components/ui/Card";
const GoogleSignIn = () => {
  return (
    <Card className="p-6 space-y-2 w-full">
      <div className="flex items-center justify-between">
        <Image src={GoogleIcon} alt="google icon" />
        <Button
          background="lightPurple"
          border="none"
          textColor="darkPurple"
          title="Connected"
          type="button"
          className="py-1 px-6"
          rounded="medium"
        />
      </div>
      <div>
        <p className="max-w-[209px] text-sm">
          Use Google to sign in to your account.
          <span className="text-primary-purple">Click to learn more</span>
        </p>
      </div>
    </Card>
  );
};

export default GoogleSignIn;
