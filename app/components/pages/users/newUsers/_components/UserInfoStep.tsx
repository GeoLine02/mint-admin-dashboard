"use client";

import Button from "@/app/components/ui/Button";
import Card from "@/app/components/ui/Card";
import Input from "@/app/components/ui/Input";
import withFormik from "@/app/HOC/WithFormik";
import {
  IUserFullInfo,
  IUserInfoStep,
  UserCreationStepType,
} from "@/app/types/user";
import { userInfoStepValidation } from "@/app/validations/users/newUserValidation";
import { Formik, Form } from "formik";

// Wrap your Input component to connect it with Formik
const FormikInput = withFormik(Input);

interface UserInfoStepProps {
  setCurrentStep: React.Dispatch<React.SetStateAction<UserCreationStepType>>;
  setUserFullInfo: React.Dispatch<React.SetStateAction<IUserFullInfo>>;
  userFullInfo: IUserFullInfo;
}

const UserInfoStep = ({
  setCurrentStep,
  setUserFullInfo,
  userFullInfo,
}: UserInfoStepProps) => {
  const submitForm = (values: IUserInfoStep) => {
    setCurrentStep("address");
    setUserFullInfo((prev) => ({
      ...prev,
      firstName: values.firstName,
      lastName: values.lastName,
      company: values.company,
      email: values.email,
      password: values.password,
      repeatPassword: values.repeatPassword,
    }));
  };

  return (
    <Card className="p-6 w-full">
      <div>
        <h1 className="text-xl font-bold">About Me</h1>
        <p className="text-[#89868D]">Mandatory information</p>
      </div>

      <Formik
        initialValues={userFullInfo}
        validationSchema={userInfoStepValidation}
        onSubmit={submitForm}
      >
        <Form className="grid grid-cols-1 md:grid-cols-2 gap-11 mt-6">
          <FormikInput
            rounded="md"
            className="max-w-[330px]"
            name="firstName"
            type="text"
            hasBorder
            placeholder="Eg. Malik"
          />
          <FormikInput
            rounded="md"
            name="lastName"
            type="text"
            hasBorder
            placeholder="Eg. Ali"
          />
          <FormikInput
            rounded="md"
            name="company"
            type="text"
            hasBorder
            placeholder="Eg. TeamUXD"
          />
          <FormikInput
            className="max-w-[330px]"
            rounded="md"
            name="email"
            type="email"
            hasBorder
            placeholder="Eg. team@gmail.com"
          />
          <FormikInput
            rounded="md"
            name="password"
            type="password"
            hasBorder
            placeholder="••••••••"
          />
          <FormikInput
            rounded="md"
            name="repeatPassword"
            type="password"
            hasBorder
            placeholder="••••••••"
          />

          <div className="col-span-1 md:col-span-2 flex justify-end">
            <Button
              background="primaryPurple"
              border="none"
              textColor="white"
              title="Next"
              type="submit"
              disabled={false}
              rounded="medium"
              className="w-fit p-2 px-5"
            />
          </div>
        </Form>
      </Formik>
    </Card>
  );
};

export default UserInfoStep;
