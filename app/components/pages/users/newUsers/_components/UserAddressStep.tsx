"use client";

import Button from "@/app/components/ui/Button";
import Card from "@/app/components/ui/Card";
import Input from "@/app/components/ui/Input";
import withFormik from "@/app/HOC/WithFormik";
import {
  IUserAddressStep,
  IUserFullInfo,
  UserCreationStepType,
} from "@/app/types/user";
import { userAddressValidation } from "@/app/validations/users/newUserValidation";
import { Formik, Form } from "formik";

const FormikInput = withFormik(Input);

interface UserAddressStepProps {
  setCurrentStep: React.Dispatch<React.SetStateAction<UserCreationStepType>>;
  userFullInfo: IUserFullInfo;
  setUserFullInfo: React.Dispatch<React.SetStateAction<IUserFullInfo>>;
}

const UserAddressStep = ({
  setCurrentStep,
  setUserFullInfo,
  userFullInfo,
}: UserAddressStepProps) => {
  const submitForm = (values: IUserAddressStep) => {
    setUserFullInfo((prev) => ({
      ...prev,
      street: values.street,
      city: values.city,
      state: values.state,
      zipCode: values.zipCode,
      country: values.country,
    }));
    setCurrentStep("socials"); // or your next step
  };

  return (
    <Card className="p-6 w-full">
      <div>
        <h1 className="text-xl font-bold">Address Information</h1>
        <p className="text-[#89868D]">Where are you located?</p>
      </div>

      <Formik
        initialValues={userFullInfo}
        validationSchema={userAddressValidation}
        onSubmit={submitForm}
      >
        <Form className="grid grid-cols-1 md:grid-cols-2 gap-11 mt-6">
          <FormikInput
            rounded="md"
            className="max-w-[330px]"
            name="street"
            type="text"
            hasBorder
            placeholder="Eg. 123 Main St"
          />
          <FormikInput
            rounded="md"
            name="city"
            type="text"
            hasBorder
            placeholder="Eg. New York"
          />
          <FormikInput
            rounded="md"
            name="state"
            type="text"
            hasBorder
            placeholder="Eg. NY"
          />
          <FormikInput
            rounded="md"
            name="zipCode"
            type="text"
            hasBorder
            placeholder="Eg. 10001"
          />
          <FormikInput
            rounded="md"
            name="country"
            type="text"
            hasBorder
            placeholder="Eg. USA"
          />

          <div className="col-span-1 md:col-span-2 flex justify-between">
            <Button
              background="primaryPurple"
              border="none"
              textColor="white"
              title="Back"
              type="button"
              rounded="medium"
              className="w-fit p-2 px-5"
              onClick={() => setCurrentStep("address")}
            />
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

export default UserAddressStep;
