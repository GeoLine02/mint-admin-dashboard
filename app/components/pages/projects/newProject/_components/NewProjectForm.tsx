"use client";

import Button from "@/app/components/ui/Button";
import Card from "@/app/components/ui/Card";
import Input from "@/app/components/ui/Input";
import Upload from "@/app/components/ui/Upload";
import withFormik from "@/app/HOC/WithFormik";
import { INewProjectValues } from "@/app/types/projects";
import { newProjectValidationSchema } from "@/app/validations/projects/projectsValidation";
import { Form, Formik } from "formik";

interface NewProjectFormProps {
  newProjectValues: INewProjectValues;
  setNewProjectValues: React.Dispatch<React.SetStateAction<INewProjectValues>>;
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewProjectForm = ({
  newProjectValues,
  setNewProjectValues,
  setIsSuccess,
}: NewProjectFormProps) => {
  const FormikInput = withFormik(Input);
  const FormikUpload = withFormik(Upload);

  const submitForm = (values: INewProjectValues) => {
    setNewProjectValues(values);
    setIsSuccess(true);
  };

  return (
    <Card className="p-5 max-w-[750px] space-y-5 w-full">
      <div className="space-y-1">
        <h1 className="text-xl">New Project</h1>
        <p className="text-sm text-medium-gray">Create new project</p>
      </div>
      <Formik
        validationSchema={newProjectValidationSchema}
        onSubmit={submitForm}
        initialValues={newProjectValues}
      >
        <Form className="grid grid-cols-2 space-y-5 gap-5">
          <div className="col-start-1 col-end-1 space-y-5">
            <FormikInput
              name="projectName"
              type="text"
              hasBorder
              placeholder="e.g Mint-dashboard"
              label="Project name"
              rounded="md"
            />
            <FormikInput
              name="projectTags"
              type="text"
              hasBorder
              placeholder="e.g #development, #ecomcerce"
              label="Project Tags"
              rounded="md"
            />
            <FormikInput
              name="startDate"
              type="text"
              hasBorder
              placeholder="05/04/2025"
              label="Start date"
              rounded="md"
            />
          </div>
          <div className="col-start-2 col-end-2 space-y-5">
            <FormikInput
              name="projectTitle"
              type="text"
              hasBorder
              label="Project title"
              placeholder="e.g Admin-Panel"
              rounded="md"
            />
            <FormikInput
              name="repositoryLink"
              type="text"
              hasBorder
              label="Repository link"
              placeholder="e.g https://mint-admin-dashoboard.com"
              rounded="md"
            />
            <FormikInput
              name="endDate"
              type="text"
              hasBorder
              label="End date"
              placeholder="e.g 02/09/2025"
              rounded="md"
            />
          </div>
          <div className="col-span-2">
            <label>Project Image</label>
            <FormikUpload name="image" className="!max-w-full !w-full !m-0" />
          </div>
          <div className="flex items-center justify-end gap-3 col-start-2 col-end-2 w-full">
            <Button
              className="max-w-[100px] flex items-center justify-center p-2 px-2"
              background="white"
              border="solid"
              textColor="darkPurple"
              title="Cancel"
              type="reset"
              rounded="medium"
            />
            <Button
              className="max-w-[140px] flex items-center justify-center p-2 px-2 border-primary-purple"
              background="primaryPurple"
              border="solid"
              textColor="white"
              title="Create project"
              type="submit"
              rounded="medium"
            />
          </div>
        </Form>
      </Formik>
    </Card>
  );
};

export default NewProjectForm;
