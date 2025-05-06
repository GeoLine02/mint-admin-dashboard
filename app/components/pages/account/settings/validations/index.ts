import * as yup from "yup";

export const validationSchema = yup.object().shape({
  firstName: yup.string().min(3, "first name must be at least 3 characters"),
  lastName: yup.string(),
  email: yup.string().email("Invalid email address"),
  username: yup.string().min(3, "Username must be at least 3 characters"),
  phone: yup.string().matches(/^\+?[0-9\s\-]{7,15}$/, "Invalid phone number"),
  city: yup.string(),
  country: yup.string(),
  zipCode: yup.string().matches(/^\d{4,10}$/, "Invalid zip code"),
  bio: yup.string().max(300, "Bio must be at most 300 characters").nullable(),
  image: yup
    .mixed<File>()
    .nullable()
    .test("fileSize", "File size too large", (file) =>
      file ? file.size <= 2 * 1024 * 1024 : true
    )
    .test("fileType", "Unsupported file format", (file) =>
      file ? ["image/jpeg", "image/png", "image/jpg"].includes(file.type) : true
    ),
});
