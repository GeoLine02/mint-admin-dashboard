import Input from "@/app/components/ui/Input";
import Select from "@/app/components/ui/Select";
import Textarea from "@/app/components/ui/TextArea";
import { IMemberOption, INewTask, Task } from "@/app/types/kanban";
import { v4 as uuid } from "uuid";
interface TaskModalProps {
  setTaskInfo: React.Dispatch<React.SetStateAction<INewTask>>;
  taskInfo: INewTask;
  memberOptions: IMemberOption[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  setIsNewTaskModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeColumn: string;
  tasks: Task[];
}

const TaskModal = ({
  taskInfo,
  setTaskInfo,
  memberOptions,
  activeColumn,
  setTasks,
  tasks,
  setIsNewTaskModalOpen,
}: TaskModalProps) => {
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setTaskInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const isUniqueTask = tasks.some((task) => task.title === taskInfo.taskTitle);

  const onSave = () => {
    // Ensure activeColumn is one of the allowed types
    const columnStatus = activeColumn as Task["status"];

    if (!isUniqueTask) {
      setTasks((prevTasks) => {
        return [
          ...prevTasks,
          {
            id: uuid(),
            title: taskInfo.taskTitle,
            taskDeadline: taskInfo.taskDeadline,
            teamName: taskInfo.teamName,
            clipCount: 0,
            commentCount: 0,
            status: columnStatus,
          },
        ];
      });
      setIsNewTaskModalOpen(false);

      setTaskInfo({
        id: "",
        projectMembers: [],
        projectTitle: "",
        status: "",
        taskDeadline: 0,
        taskDescription: "",
        taskTitle: "",
        teamName: "",
      });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 flex flex-col gap-6">
      <h1 className="text-2xl font-semibold text-gray-800">Add New Task</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-5">
          <Input
            name="taskTitle"
            type="text"
            hasBorder
            label="Task Title"
            rounded="lg"
            value={taskInfo.taskTitle}
            onChange={onChange}
          />

          <Input
            name="taskDeadline"
            type="number"
            hasBorder
            label="Task Deadline (Days)"
            rounded="lg"
            onChange={onChange}
            placeholder="Task deadline"
            value={taskInfo.taskDeadline.toString()}
          />
          <Input
            name="teamName"
            type="text"
            hasBorder
            label="Team name"
            rounded="lg"
            onChange={onChange}
            placeholder="Team name"
            value={taskInfo.teamName}
          />
        </div>

        <div className="flex flex-col gap-5">
          <Input
            name="projectTitle"
            type="text"
            label="Project Title"
            hasBorder
            rounded="lg"
            value={taskInfo.projectTitle}
            onChange={onChange}
          />
          <Select
            placeholder="Add your team members"
            searchable
            multi
            options={memberOptions}
            onChange={() => {}}
            label="Project Members"
            value={taskInfo.projectMembers.map((members) => members.value)}
          />
        </div>

        <Textarea
          className="col-start-1 col-end-2 col-span-2"
          name="taskDescription"
          label="Task Description"
          value={taskInfo.taskDescription}
          onChange={onChange}
        />
      </div>
      <div>
        {isUniqueTask && (
          <div className="border border-dotted border-red-500 w-fit p-2 py-3">
            <span className="text-red-500">
              Task with title{" "}
              <span className="font-bold text-red-500">
                {taskInfo.taskTitle}
              </span>{" "}
              already exists
            </span>
          </div>
        )}
      </div>
      <div className="flex justify-end mt-6">
        <button
          onClick={onSave}
          className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow cursor-pointer"
        >
          Save Task
        </button>
      </div>
    </div>
  );
};

export default TaskModal;
