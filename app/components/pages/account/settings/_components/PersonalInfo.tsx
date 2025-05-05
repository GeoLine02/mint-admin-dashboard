import Card from "@/app/components/ui/Card";
import Input from "@/app/components/ui/Input";
import Textarea from "@/app/components/ui/TextArea";
import withFormik from "@/app/HOC/WithFormik";

const PersonalInfo = () => {
  const FormikInput = withFormik(Input);
  const FormikTextArea = withFormik(Textarea);

  return (
    <Card className="w-full h-full max-w-[80%]">
      <div className="border-b border-medium-gray px-6 py-4">
        <h1 className="text-lg font-semibold">Personal information</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 py-4">
        <FormikInput
          name="firstName"
          label="First name"
          placeholder="Enter first name"
          type="text"
          hasBorder
          rounded="md"
        />
        <FormikInput
          name="lastName"
          label="Last Name"
          placeholder="Enter last name"
          type="text"
          hasBorder
          rounded="md"
        />
        <FormikInput
          name="email"
          label="Email Address"
          placeholder="Enter email address"
          type="text"
          hasBorder
          rounded="md"
        />
        <FormikInput
          name="username"
          label="Username"
          placeholder="Enter user name"
          type="text"
          hasBorder
          rounded="md"
        />
        <FormikInput
          name="phone"
          label="Phone No"
          placeholder="Enter phone number"
          type="text"
          hasBorder
          rounded="md"
        />
        <FormikInput
          name="city"
          label="City"
          placeholder="Enter your city"
          type="text"
          hasBorder
          rounded="md"
        />
        <FormikInput
          name="country"
          label="Country Name"
          placeholder="Enter country name"
          type="text"
          hasBorder
          rounded="md"
        />
        <FormikInput
          name="zipCode"
          label="Zip Code"
          placeholder="Enter zip code"
          type="text"
          hasBorder
          rounded="md"
        />

        <div className="md:col-span-2">
          <FormikTextArea
            name="bio"
            placeholder="Write a short bio..."
            rows={4}
            className="mt-2"
            label="Bio"
          />
        </div>
      </div>
    </Card>
  );
};

export default PersonalInfo;
