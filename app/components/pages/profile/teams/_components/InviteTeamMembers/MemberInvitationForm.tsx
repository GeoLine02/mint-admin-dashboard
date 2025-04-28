"use client";

import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import EmailIcon from "@mui/icons-material/Email";
import AddIcon from "@mui/icons-material/Add";
import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";
import withFormik from "@/app/HOC/WithFormik";

const MemberInvitationForm = () => {
  const FormikInput = withFormik(Input);

  const [emailFields, setEmailFields] = useState([
    "email1",
    "email2",
    "email3",
  ]);

  const [areTermsAccepted, setAreTermsAccepted] = useState<boolean>(false);

  const initialValues = emailFields.reduce((acc, field) => {
    acc[field] = "";
    return acc;
  }, {} as Record<string, string>);

  const onSubmit = async (values: Record<string, string>) => {
    console.log("Submitted:", values);
  };

  console.log("isTermsAccepted", areTermsAccepted);

  const handleAddMoreFields = () => {
    const newField = `email${emailFields.length + 1}`;
    setEmailFields([...emailFields, newField]);
  };

  const handleAcceptTerms = () => {
    setAreTermsAccepted(!areTermsAccepted);
  };

  return (
    <div className="max-w-[80%] w-full">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className="flex flex-col gap-6">
          {emailFields.map((field) => (
            <FormikInput
              key={field}
              name={field}
              type="email"
              icon={<EmailIcon />}
              hasBorder
              rounded="lg"
              placeholder="team@team.com"
            />
          ))}

          {/* Checkbox for terms acceptance */}
          <div className="flex items-center gap-1">
            <Input
              name="terms"
              type="checkbox"
              checked={areTermsAccepted}
              onChange={handleAcceptTerms}
            />
            {/* <FormikInput
              type="checkbox"
              name="acceptTerms"
              checked={isTermsAccepted} // We will control this with Formik state
              onChange={handleAcceptTerms}
              className="text-[#89868D]"
            /> */}
            <label htmlFor="acceptTerms" className="text-[#89868D]">
              I accept the terms and conditions
            </label>
            <ErrorMessage
              name="acceptTerms"
              component="div"
              className="text-red-500 text-sm pl-2"
            />
          </div>

          {/* Buttons for adding more email fields and submitting the form */}
          <div className="flex items-center justify-between">
            <Button
              background="white"
              border="none"
              onClick={handleAddMoreFields}
              rounded="medium"
              title="Add another"
              type="button"
              textColor="lightGray"
              icon={
                <AddIcon
                  sx={{
                    color: "#89868D",
                  }}
                />
              }
            />
            <Button
              disabled={!areTermsAccepted}
              background="transparent"
              border="none"
              title="Send Invites"
              type="submit"
              textColor="darkPurple"
              icon={
                <EmailIcon
                  sx={{
                    color: "#6E39CB",
                  }}
                />
              }
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default MemberInvitationForm;
