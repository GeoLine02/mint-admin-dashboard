import Image from "next/image";
import Logo from "@/public/logo.svg";

import MenuList from "./_components/MenuList";
const Sidebar = () => {
  return (
    <div className="max-w-[218px] w-full">
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
