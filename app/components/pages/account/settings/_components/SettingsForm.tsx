"use client";

import { Form, Formik } from "formik";
import SettingsHeader from "./SettingsHeader";
import PersonalInfo from "./PersonalInfo";
import { useState } from "react";
import { IPersonalInformation } from "@/app/types/account";
import UserPhotoUplaod from "./UserPhotoUplaod";
import GoogleSignIn from "./GoogleSignIn";
import { validationSchema } from "../validations";

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
    values.image = null;
  };

  return (
    <div>
      <Formik
        validationSchema={validationSchema}
        initialValues={personalInfo}
        onSubmit={submitForm}
      >
        <Form className="mt-6 space-y-6">
          <SettingsHeader />
          <div className="flex flex-col lg:flex-row gap-7">
            <PersonalInfo />
            <div className="space-y-7 w-full lg:max-w-[20%]">
              <UserPhotoUplaod
                setPersonalInfo={setPersonalInfo}
                userPhoto={personalInfo.image as File}
              />
              <GoogleSignIn />
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SettingsForm;
