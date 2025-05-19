import Image from "next/image";
import Card from "../ui/Card";
import SignUpForm from "./_components/SignUpForm";
import SignUpBanner from "@/public/SignupBanner.png";

const SignUpSeen = () => {
  return (
    <div className="px-20">
      <Card className="p-5 w-full max-w-[1279px] mx-auto flex justify-center">
        <div className="w-1/2 flex items-center justify-center">
          <SignUpForm />
        </div>
        <div className="w-1/2">
          <Image alt="signup banner" src={SignUpBanner} />
        </div>
      </Card>
    </div>
  );
};

export default SignUpSeen;
