import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";
import withFormik from "@/app/HOC/WithFormik";
import { ISecuritySettings } from "@/app/types/account";
import { passwordChangeSchema } from "@/app/validations/security/securityValidation";
import { Form, Formik } from "formik";

interface SecuritySettingsProps {
  securitySettings: ISecuritySettings;
  setSecuritySettings: React.Dispatch<React.SetStateAction<ISecuritySettings>>;
}

const SecuritySettings = ({
  securitySettings,
  setSecuritySettings,
}: SecuritySettingsProps) => {
  const FormikInput = withFormik(Input);

  const submitForm = (values: ISecuritySettings) => {
    setSecuritySettings({ ...values });
  };

  return (
    <div>
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Password</h1>
        <p className="text-sm text-medium-gray">
          The Last Pass password generator creates random passwords based on
          parameters set by you.
        </p>
      </div>
      <Formik
        validationSchema={passwordChangeSchema}
        onSubmit={submitForm}
        initialValues={securitySettings}
      >
        <Form className="w-full max-w-[580px] space-y-3">
          <FormikInput
            name="currentPassword"
            type="password"
            hasBorder
            label="Current password"
            placeholder="Current password"
            rounded="md"
          />
          <FormikInput
            name="newPassword"
            type="password"
            hasBorder
            label="newPassword"
            placeholder="New password"
            rounded="md"
          />
          <FormikInput
            name="confirmPassword"
            type="password"
            hasBorder
            label="confirmPassword"
            placeholder="Confirm password"
            rounded="md"
          />
          <Button
            background="primaryPurple"
            border="none"
            textColor="white"
            title="Save"
            type="submit"
            rounded="medium"
            className="flex items-center justify-center p-2 px-4 max-w-[160px]"
          />
        </Form>
      </Formik>
    </div>
  );
};

export default SecuritySettings;
