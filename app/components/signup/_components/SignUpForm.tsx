"use client";

import withFormik from "@/app/HOC/WithFormik";
import { ISignUpCredentials } from "@/app/types/auth";
import { Form, Formik } from "formik";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { signUpSchema } from "@/app/validations/auth/authValidations";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";

const SignUpForm = () => {
  const navigate = useRouter();

  const { signup } = useAuth();

  const onSubmit = async (values: ISignUpCredentials) => {
    try {
      const res = await signup(values);

      if (res.status === 200) {
        navigate.push("/signin");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const FormikInput = withFormik(Input);
  const FormikButton = withFormik(Button);

  return (
    <div className="min-w-[330px] max-w-[330px]">
      <Formik
        validationSchema={signUpSchema}
        onSubmit={onSubmit}
        initialValues={{
          fullName: "",
          email: "",
          password: "",
        }}
      >
        <Form className="space-y-3">
          <div>
            <h1 className="text-2xl font-bold">Sign up</h1>
            <p className="text-medium-gray text-sm">
              Start your 30-day free trial.
            </p>
          </div>
          <FormikInput
            name="fullName"
            type="text"
            hasBorder
            rounded="lg"
            label="Full Name"
            placeholder="Full name"
          />
          <FormikInput
            name="email"
            type="email"
            hasBorder
            rounded="lg"
            label="Email"
            placeholder="Email"
          />
          <FormikInput
            name="password"
            type="password"
            hasBorder
            rounded="lg"
            label="Password"
            placeholder="Password"
          />

          <p className="text-sm text-medium-gray max-w-[228px]">
            You are agreeing to the{" "}
            <span className="text-primary-purple cursor-pointer">
              Terms of Services
            </span>{" "}
            and{" "}
            <span className="text-primary-purple cursor-pointer">
              Privacy Policy
            </span>
          </p>

          <FormikButton
            className="flex items-center justify-center py-2"
            name="button"
            background="primaryPurple"
            textColor="white"
            title="Sign Up"
            type="submit"
            border="none"
            rounded="medium"
          />

          <p className="text-sm text-medium-gray">
            Already a member?{" "}
            <span
              onClick={() => navigate.push("/signin")}
              className="text-primary-purple cursor-pointer"
            >
              Sign in
            </span>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUpForm;
