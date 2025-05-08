"use client";

import Card from "@/app/components/ui/Card";
import Input from "@/app/components/ui/Input";
import withFormik from "@/app/HOC/WithFormik";
import { Form, Formik } from "formik";
import PaypalICon from "@/public/paypal.png";
import Button from "@/app/components/ui/Button";
import { IBillingInformation } from "@/app/types/account";
import CardOption from "./CardOption";
import VisaIcon from "@/public/Visa.svg";

interface PaymentFormProps {
  billingInfo: IBillingInformation;
  setBillingInfo: React.Dispatch<React.SetStateAction<IBillingInformation>>;
}

const PaymentForm = ({ billingInfo, setBillingInfo }: PaymentFormProps) => {
  const FormikInput = withFormik(Input);

  const submitForm = (values: IBillingInformation) => {
    console.log(values);
  };

  return (
    <Card className="w-full">
      <div className="p-5 border-b border-medium-gray">
        <h1 className="text-2xl font-bold">Payment</h1>
      </div>
      <h1 className="text-2xl font-bold p-5">Payment method</h1>
      <Formik onSubmit={submitForm} initialValues={billingInfo}>
        <Form>
          <div className="p-5 space-y-5">
            <div className="flex gap-5 ">
              <CardOption
                setBillingInfo={setBillingInfo}
                isSelected={billingInfo.paymnetMethod === "visa"}
                title="Visa"
                cardIcon={VisaIcon}
              />
              <CardOption
                setBillingInfo={setBillingInfo}
                isSelected={billingInfo.paymnetMethod === "paypal"}
                title="Paypal"
                cardIcon={PaypalICon}
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="col-start-1 col-end-1">
                <FormikInput
                  hasBorder
                  rounded="md"
                  name="cardHolderName"
                  type="text"
                  label="Card holder name"
                  placeholder="Jhon Walden"
                />
                <FormikInput
                  hasBorder
                  rounded="md"
                  name="billingAddress"
                  type="text"
                  label="Billing address"
                  placeholder="Germany"
                />
              </div>
              <div className="col-start-2 gap-5">
                <FormikInput
                  hasBorder
                  rounded="md"
                  name="zipCode"
                  type="text"
                  label="Zip code"
                  placeholder="6789123"
                />
                <FormikInput
                  hasBorder
                  rounded="md"
                  name="city"
                  type="text"
                  label="City"
                  placeholder="Berlain"
                />
              </div>
            </div>
            <Button
              className="flex items-center justify-center p-3"
              background="primaryPurple"
              textColor="white"
              border="none"
              title="Pay $67.00"
              type="submit"
              rounded="medium"
            />
          </div>
        </Form>
      </Formik>
    </Card>
  );
};

export default PaymentForm;
