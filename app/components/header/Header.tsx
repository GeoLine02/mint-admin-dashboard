import Search from "./_components/Search";

const Header = () => {
  return (
    <header className="w-full">
      <div className="w-1/2 flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-primary-purple">
          Dashboard
        </h1>
        <Search />
      </div>
    </header>
  );
};

export default Header;
