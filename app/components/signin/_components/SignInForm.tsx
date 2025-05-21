"use client";

import withFormik from "@/app/HOC/WithFormik";
import { Form, Formik } from "formik";
import Input from "../../ui/Input";
import { ISigInCredentials } from "@/app/types/auth";
import Button from "../../ui/Button";
import { useRouter } from "next/navigation";

interface SignInFormProps {
  login: (credentials: ISigInCredentials) => Promise<void>;
}

const SignInForm = ({ login }: SignInFormProps) => {
  const FormikInput = withFormik(Input);
  const FormikButton = withFormik(Button);
  const router = useRouter();

  const onSubmit = async (values: ISigInCredentials) => {
    try {
      await login(values);
    } catch (error) {
      console.log("Login error:", error);
    }
  };

  return (
    <div className="min-w-[330px] max-w-[330px]">
      <Formik
        onSubmit={onSubmit}
        initialValues={{
          email: "",
          password: "",
        }}
      >
        <Form className="space-y-2 lg:space-y-3">
          <div className="border-2 border-red-500 border-dashed text-red-500 bg-red-200 p-3 space-y-2">
            <h1 className="text-xl font-bold">Admin credentials:</h1>
            <h2>email: admin@gmail.com</h2>
            <h2>password: 123456</h2>
          </div>

          <div>
            <h1 className="text-2xl font-bold">Sign in</h1>
            <p className="text-medium-gray text-sm">How do i get started?</p>
          </div>
          <FormikInput
            name="email"
            type="email"
            hasBorder
            rounded="md"
            label="Email"
            placeholder="Email"
          />
          <FormikInput
            name="password"
            type="password"
            hasBorder
            rounded="md"
            label="Password"
            placeholder="Password"
          />
          <div className="flex justify-between">
            <span
              onClick={() => router.push("/signup")}
              className="text-primary-purple text-sm cursor-pointer"
            >
              Sign up
            </span>
            <span className="text-primary-purple text-sm cursor-pointer">
              Forget password?
            </span>
          </div>

          <FormikButton
            background="primaryPurple"
            border="none"
            name="button"
            textColor="white"
            title="Sign in"
            type="submit"
            className="flex items-center justify-center py-3"
            rounded="medium"
          />
        </Form>
      </Formik>
    </div>
  );
};

export default SignInForm;
