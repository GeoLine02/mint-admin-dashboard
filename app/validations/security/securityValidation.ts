import * as yup from "yup";

export const passwordChangeSchema = yup.object().shape({
  currentPassword: yup.string().required("Current password is required"),

  newPassword: yup
    .string()
    .min(8, "New password must be at least 8 characters")
    .matches(/[a-z]/, "New password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "New password must contain at least one uppercase letter")
    .matches(/[0-9]/, "New password must contain at least one number")
    .required("New password is required"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Passwords must match")
    .required("Please confirm your new password"),
});
