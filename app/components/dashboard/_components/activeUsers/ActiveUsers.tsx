import Card from "../../../ui/Card";
import UsersIcon from "@/public/Users.png";
import ClicksIcon from "@/public/Clicks.png";
import SalesIcon from "@/public/Sales.png";
import ItemsIcon from "@/public/Items.png";
import Image from "next/image";
import LinearProgressBar from "@/app/components/ui/LinearProgressBar";
import ActiveUsersBarChart from "./ActiveUsersBarChart";

const ActiveUsers = () => {
  const activeUsersBarChartData = [
    230, 195, 194, 100, 157, 245, 122, 299, 253, 183,
  ];

  return (
    <Card className="p-[30px] w-full">
      <h1 className="text-3xl">Active users right now</h1>
      <div className="w-full my-[25px]">
        <ActiveUsersBarChart chartData={activeUsersBarChartData} />
      </div>

      {/* Totals */}

      <section className="flex items-center gap-3.5">
        <Card className="p-5 space-y-4 mt-[30px] max-w-[140px] w-full xl:max-w-[250px]">
          <div className="flex items-center gap-3.5 text-primary-gray">
            <Image src={UsersIcon} alt="total users" />
            <h1 className="3xl:text-xl">Users</h1>
          </div>
          <h1 className="text-3xl xl:text-5xl font-semibold 3xl:text-7xl">
            35k
          </h1>
          <LinearProgressBar
            value={60}
            className="w-full"
            totalBarColor="#DECCFE"
            valueColor="#6e39cb"
          />
        </Card>
        <Card className="p-5 space-y-4 mt-[30px] w-full max-w-[140px] xl:max-w-[250px]">
          <div className="flex items-center gap-3.5 text-primary-gray">
            <Image src={ClicksIcon} alt="total users" />
            <h1 className="3xl:text-xl">Clicks</h1>
          </div>
          <h1 className="text-3xl font-semibold 3xl:text-7xl">1m</h1>

          <LinearProgressBar
            value={40}
            className="w-full"
            totalBarColor="#DECCFE"
            valueColor="#6e39cb"
          />
        </Card>
        <Card className="p-5 space-y-4 mt-[30px] w-full max-w-[140px] xl:max-w-[250px]">
          <div className="flex items-center gap-3.5 text-primary-gray">
            <Image src={SalesIcon} alt="total uers" />
            <h1 className="3xl:text-xl">Sales</h1>
          </div>
          <h1 className="text-3xl font-semibold 3xl:text-7xl">345$</h1>

          <LinearProgressBar
            value={30}
            className="w-full"
            totalBarColor="#DECCFE"
            valueColor="#6e39cb"
          />
        </Card>
        <Card className="p-5 space-y-4 mt-[30px] w-full max-w-[140px] xl:max-w-[250px]">
          <div className="flex items-center gap-3.5 text-primary-gray">
            <Image src={ItemsIcon} alt="total uers" />
            <h1 className="3xl:text-xl">Items</h1>
          </div>
          <h1 className="text-3xl 3xl:text-7xl font-semibold">68</h1>

          <LinearProgressBar
            value={60}
            className="w-full"
            totalBarColor="#DECCFE"
            valueColor="#6e39cb"
          />
        </Card>
      </section>
    </Card>
  );
};

export default ActiveUsers;
