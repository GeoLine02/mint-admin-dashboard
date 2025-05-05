"use client";

import { Form, Formik } from "formik";
import SettingsHeader from "./SettingsHeader";
import PersonalInfo from "./PersonalInfo";
import { useState } from "react";
import { IPersonalInformation } from "@/app/types/account";
import UserPhotoUplaod from "./UserPhotoUplaod";
import GoogleSignIn from "./GoogleSignIn";

const SettingsForm = () => {
  const [personalInfo, setPersonalInfo] = useState<IPersonalInformation>({
    bio: "",
    city: "",
    country: "",
    email: "",
    firstName: "",
    image: null,
    lastName: "",
    phone: "",
    username: "",
    zipCode: "",
  });

  const submitForm = (values: IPersonalInformation) => {
    setPersonalInfo({ ...values });
  };
  console.log(personalInfo);

  return (
    <div>
      <Formik initialValues={personalInfo} onSubmit={submitForm}>
        <Form className="mt-6">
          <SettingsHeader />
          <div className="flex gap-7">
            <PersonalInfo />
            <div className="space-y-7 w-full max-w-[20%]">
              <UserPhotoUplaod />
              <GoogleSignIn />
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SettingsForm;
