const Search = () => {
  return (
    <div className="max-w-[330px] w-full rounded-full p-3 border-2 border-light-gray bg-white">
      <input
        placeholder="Search anything here..."
        className="w-full focus:outline-none text-lg"
        type="text"
      />
    </div>
  );
};

export default Search;
