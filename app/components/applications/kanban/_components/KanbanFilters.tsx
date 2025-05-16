import Input from "@/app/components/ui/Input";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const KanbanFilters = () => {
  return (
    <div className="flex items-center justify-between py-6">
      <Input
        name="searchProjects"
        type="text"
        hasBorder
        icon={<SearchIcon />}
        placeholder="Search projects"
        rounded="lg"
      />

      <div className="flex items-center gap-3">
        <FilterAltIcon className="text-primary-purple bg-light-gray p-2 rounded-full cursor-pointer box-content" />
        <span>Apply Filter</span>
      </div>
    </div>
  );
};

export default KanbanFilters;
