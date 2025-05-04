import Card from "@/app/components/ui/Card";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const UserSuccessStep = () => {
  return (
    <Card className="p-10 w-full flex flex-col items-center text-center gap-6">
      <CheckCircleIcon
        className="text-green-500 animate-pulse"
        style={{ fontSize: "7rem" }}
      />
      <h1 className="text-2xl font-bold">Account Created Successfully!</h1>
      <p className="text-[#6B7280] max-w-md">
        Your account has been successfully created. You can now log in and start
        using the platform.
      </p>
    </Card>
  );
};

export default UserSuccessStep;
