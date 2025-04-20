import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface IHashTagCardProps {
  title: string;
  tags: string[];
}

const HashTagCard = ({ title, tags }: IHashTagCardProps) => {
  return (
    <div className="flex items-center justify-between hover:bg-primary-purple p-2 rounded-xl group transition-all duration-300 cursor-pointer">
      <div>
        <h1 className="group-hover:text-white">{title}</h1>
        <div className="flex items-center gap-2">
          {tags.map((tag) => (
            <span className="text-[#89868D] group-hover:text-white" key={tag}>
              #{tag}
            </span>
          ))}
        </div>
      </div>
      <div className="text-[#89868D] group-hover:text-white">
        <KeyboardArrowDownIcon />
      </div>
    </div>
  );
};

export default HashTagCard;
