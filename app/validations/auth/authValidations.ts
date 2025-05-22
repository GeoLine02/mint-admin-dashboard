import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  fullName: yup.string().required("Full name is required").min(3),
  email: yup
    .string()
    .required("Email is required")
    .email("email is missing @example.com"),
  password: yup.string().required("Password is required").min(8).max(16),
});
