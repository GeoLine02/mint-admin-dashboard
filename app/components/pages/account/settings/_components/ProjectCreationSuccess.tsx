import Card from "@/app/components/ui/Card";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const ProjectCreationSuccess = () => {
  return (
    <Card className="p-5 flex flex-col gap-5 items-center justify-center">
      <CheckCircleIcon
        className="animate-pulse text-9xl text-primary-purple w-36"
        sx={{
          fontSize: "200px",
        }}
      />
      <h1 className="text-xl text-primary-purple">
        Project created Successfuly
      </h1>
    </Card>
  );
};

export default ProjectCreationSuccess;
