import Card from "../../../ui/Card";
import DescriptionIcon from "@mui/icons-material/Description";
import UsersIcon from "@/public/Users.png";
import ClicksIcon from "@/public/Clicks.png";
import SalesIcon from "@/public/Sales.png";
import ItemsIcon from "@/public/Items.png";
import Image from "next/image";
import LinearProgressBar from "@/app/components/ui/LinearProgressBar";
import ActiveUsersLineChart from "./ActiveUsersLineChart";
import ActiveUsersBarChart from "./ActiveUsersBarChart";

const ActiveUsers = () => {
  const activeUsersBarChartData = [
    230, 195, 194, 100, 157, 245, 122, 299, 253, 183,
  ];

  const activeUsersLineChartData = [100, 130, 70, 20, 80, 60];

  const activeUsersLineCHartMargins = {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  };

  return (
    <Card className="p-[30px] w-full">
      <h1 className="text-3xl">Active users right now</h1>
      <div className="flex gap-8 w-full items-end my-[25px]">
        <div className="max-w-[149px] ">
          <section>
            <h1 className="text-[64px] text-primary-purple font-semibold">
              300
            </h1>
            <div className="flex items-center gap-2">
              <DescriptionIcon sx={{ color: "#6e39cb" }} />
              <h2 className="text-[14px]">Page views per minute</h2>
            </div>
          </section>
          <hr />
          <section>
            <ActiveUsersLineChart
              margin={activeUsersLineCHartMargins}
              chartData={activeUsersLineChartData}
            />
            <h2 className="text-[14px]">
              Upgrade your payout method in setting
            </h2>
          </section>
        </div>
        <ActiveUsersBarChart chartData={activeUsersBarChartData} />
      </div>

      {/* Totals */}

      <section className="flex items-center gap-3.5">
        <Card className="p-5 space-y-4 mt-[30px] max-w-[250px]">
          <div className="flex items-center gap-3.5 text-primary-gray">
            <Image src={UsersIcon} alt="total users" />
            <h1 className="3xl:text-xl">Users</h1>
          </div>
          <h1 className="text-5xl font-semibold 3xl:text-7xl">35k</h1>
          <LinearProgressBar
            value={60}
            className={"w-[150px]"}
            totalBarColor="#DECCFE"
            valueColor="#6e39cb"
          />
        </Card>
        <Card className="p-5 space-y-4 mt-[30px] max-w-[300px]">
          <div className="flex items-center gap-3.5 text-primary-gray">
            <Image src={ClicksIcon} alt="total users" />
            <h1 className="3xl:text-xl">Clicks</h1>
          </div>
          <h1 className="text-5xl font-semibold 3xl:text-7xl">1m</h1>

          <LinearProgressBar
            value={40}
            className={"w-[150px]"}
            totalBarColor="#DECCFE"
            valueColor="#6e39cb"
          />
        </Card>
        <Card className="p-5 space-y-4 mt-[30px] max-w-[189px]">
          <div className="flex items-center gap-3.5 text-primary-gray">
            <Image src={SalesIcon} alt="total uers" />
            <h1 className="3xl:text-xl">Sales</h1>
          </div>
          <h1 className="text-5xl font-semibold 3xl:text-7xl">345$</h1>

          <LinearProgressBar
            value={30}
            className={"w-[150px]"}
            totalBarColor="#DECCFE"
            valueColor="#6e39cb"
          />
        </Card>
        <Card className="p-5 space-y-4 mt-[30px] max-w-[189px]">
          <div className="flex items-center gap-3.5 text-primary-gray">
            <Image src={ItemsIcon} alt="total uers" />
            <h1 className="3xl:text-xl">Items</h1>
          </div>
          <h1 className="text-5xl 3xl:text-7xl font-semibold">68</h1>

          <LinearProgressBar
            value={60}
            className={"w-[150px]"}
            totalBarColor="#DECCFE"
            valueColor="#6e39cb"
          />
        </Card>
      </section>
    </Card>
  );
};

export default ActiveUsers;
