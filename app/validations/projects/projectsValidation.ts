import * as yup from "yup";

export const newProjectValidationSchema = yup.object().shape({
  projectName: yup
    .string()
    .required("Project name is required")
    .max(50, "Project name must be at most 50 characters"),

  projectTags: yup
    .string()
    .required("Project tags are required")
    .matches(/^#?[a-zA-Z0-9\s#,]+$/, "Invalid tags format"),

  startDate: yup
    .string()
    .required("Start date is required")
    .matches(
      /^\d{2}\/\d{2}\/\d{4}$/,
      "Start date must be in the format DD/MM/YYYY"
    ),

  projectTitle: yup
    .string()
    .required("Project title is required")
    .max(100, "Project title must be at most 100 characters"),

  repositoryLink: yup
    .string()
    .url("Invalid URL format")
    .required("Repository link is required"),

  endDate: yup
    .string()
    .required("End date is required")
    .matches(
      /^\d{2}\/\d{2}\/\d{4}$/,
      "End date must be in the format DD/MM/YYYY"
    ),

  image: yup.mixed().required("Project image is required"),
});
