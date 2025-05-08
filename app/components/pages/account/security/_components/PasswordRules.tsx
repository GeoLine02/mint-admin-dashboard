import Card from "@/app/components/ui/Card";

const PasswordRules = () => {
  return (
    <Card className="p-5 bg-light-gray space-y-5">
      <h1 className="text-xl">Rules for password</h1>
      <p>
        To create a new password, you have to meet all of the following
        requirements.
      </p>
      <ul className="space-y-5 list-disc ml-5">
        <li>Minimum 8 character</li>
        <li>At least one special character</li>
        <li>At least one number</li>
        <li>Can”t be the same as a previous</li>
      </ul>
    </Card>
  );
};

export default PasswordRules;
