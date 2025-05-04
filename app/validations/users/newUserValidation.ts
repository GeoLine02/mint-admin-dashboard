import * as Yup from "yup";

export const userInfoStepValidation = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  company: Yup.string().required("Company is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6).required("Password is required"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),
});

export const userAddressValidation = Yup.object().shape({
  street: Yup.string().required("Street is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  zipCode: Yup.string().required("Zip Code is required"),
  country: Yup.string().required("Country is required"),
});

export const userSocialsValidation = Yup.object({
  twitter: Yup.string().url("Invalid Twitter URL").nullable(),
  linkedin: Yup.string().url("Invalid LinkedIn URL").nullable(),
  facebook: Yup.string().url("Invalid Facebook URL").nullable(),
  instagram: Yup.string().url("Invalid Instagram URL").nullable(),
});
