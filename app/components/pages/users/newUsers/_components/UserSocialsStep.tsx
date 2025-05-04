"use client";

import Button from "@/app/components/ui/Button";
import Card from "@/app/components/ui/Card";
import Input from "@/app/components/ui/Input";
import withFormik from "@/app/HOC/WithFormik";
import { Formik, Form } from "formik";
import {
  IUserFullInfo,
  IUserSocialsStep,
  UserCreationStepType,
} from "@/app/types/user";
import { userSocialsValidation } from "@/app/validations/users/newUserValidation";

// Wrap your Input component to connect it with Formik
const FormikInput = withFormik(Input);

interface UserSocialsStepProps {
  setCurrentStep: React.Dispatch<React.SetStateAction<UserCreationStepType>>;
  userFullInfo: IUserFullInfo;
  setUserFullInfo: React.Dispatch<React.SetStateAction<IUserFullInfo>>;
}

const UserSocialsStep = ({
  setCurrentStep,
  setUserFullInfo,
  userFullInfo,
}: UserSocialsStepProps) => {
  const submitForm = (values: IUserSocialsStep) => {
    setUserFullInfo((prev) => ({
      ...prev,
      facebook: values.facebook,
      instagram: values.instagram,
      linkedin: values.linkedin,
      twitter: values.twitter,
    }));
    setCurrentStep("success");
  };

  return (
    <Card className="p-6 w-full">
      <div>
        <h1 className="text-xl font-bold">Social Media</h1>
        <p className="text-[#89868D]">Optional information</p>
      </div>

      <Formik<IUserSocialsStep>
        initialValues={userFullInfo}
        validationSchema={userSocialsValidation}
        onSubmit={submitForm}
      >
        <Form className="grid grid-cols-1 md:grid-cols-2 gap-11 mt-6">
          <FormikInput
            name="twitter"
            type="text"
            hasBorder
            rounded="md"
            placeholder="Twitter URL"
          />
          <FormikInput
            name="linkedin"
            type="text"
            hasBorder
            rounded="md"
            placeholder="LinkedIn URL"
          />
          <FormikInput
            name="facebook"
            type="url"
            hasBorder
            rounded="md"
            placeholder="Facebook URL"
          />
          <FormikInput
            name="instagram"
            type="url"
            hasBorder
            rounded="md"
            placeholder="Instagram URL"
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

export default UserSocialsStep;
