import Image from "next/image";
import Logo from "@/public/logo.svg";

import MenuList from "./_components/MenuList";
const Sidebar = () => {
  return (
    <div className="min-w-[218px] max-w-[240px] w-full">
      <div className="p-[50px]">
        <Image src={Logo} alt="mint logo" />
      </div>
      <section>
        <MenuList />
      </section>
    </div>
  );
};

export default Sidebar;
