"use client";

import { useState } from "react";
import UserCreationSteps from "./_components/UserCreationSteps";
import {
  IUserCreationSteps,
  IUserFullInfo,
  UserCreationStepType,
} from "@/app/types/user";
import { userCreationStepsData } from "@/app/mock/users/newUsers";
import UserInfoStep from "./_components/UserInfoStep";
import UserAddressStep from "./_components/UserAddressStep";
import UserSocialsStep from "./_components/UserSocialsStep";
import UserSuccessStep from "./_components/UserSuccessStep";

const NewUsersSeen = () => {
  const [currentStep, setCurrentStep] =
    useState<UserCreationStepType>("userInfo");
  const [creationSteps] = useState<IUserCreationSteps[]>(userCreationStepsData);
  const [userFullInfo, setUserFullInfo] = useState<IUserFullInfo>({
    city: "",
    company: "",
    country: "",
    email: "",
    facebook: "",
    firstName: "",
    instagram: "",
    lastName: "",
    linkedin: "",
    password: "",
    repeatPassword: "",
    state: "",
    street: "",
    twitter: "",
    zipCode: "",
  });

  return (
    <div className="space-y-6">
      <UserCreationSteps currentSetep={currentStep} steps={creationSteps} />

      {currentStep === "userInfo" && (
        <UserInfoStep
          userFullInfo={userFullInfo}
          setUserFullInfo={setUserFullInfo}
          setCurrentStep={setCurrentStep}
        />
      )}
      {currentStep === "address" && (
        <UserAddressStep
          userFullInfo={userFullInfo}
          setUserFullInfo={setUserFullInfo}
          setCurrentStep={setCurrentStep}
        />
      )}
      {currentStep === "socials" && (
        <UserSocialsStep
          setCurrentStep={setCurrentStep}
          setUserFullInfo={setUserFullInfo}
          userFullInfo={userFullInfo}
        />
      )}
      {currentStep === "success" && <UserSuccessStep />}
    </div>
  );
};

export default NewUsersSeen;
