import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <div className="flex items-center gap-2 max-w-[330px] w-full rounded-full p-3 border-2 border-light-gray bg-white">
      <input
        placeholder="Search anything here..."
        className="w-full focus:outline-none text-lg"
        type="text"
      />
      <SearchIcon sx={{ color: "#89868D" }} />
    </div>
  );
};

export default Search;
