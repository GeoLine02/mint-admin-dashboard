import Card from "../../../ui/Card";
import ActiveUsersBarChart from "./ActiveUsersBarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import ActiveUsersLineChart from "./ActiveUsersLineChart";
import UsersIcon from "@/public/Users.png";
import ClicksIcon from "@/public/Clicks.png";
import SalesIcon from "@/public/Sales.png";
import ItemsIcon from "@/public/Items.png";
import Image from "next/image";
import LinearProgressBar from "@/app/components/ui/LinearProgressBar";
import SalesByAge from "../Sales/SalesByAge";

const BarChar = () => {
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

  // const mostActiveUserCount = [
  //   ...activeUsersBarChartData.sort((a, b) => b - a),
  // ][0];

  return (
    <div className="w-[862px]">
      <Card className="p-[30px]">
        <h1 className="text-3xl">Active users right now</h1>
        <div className="flex gap-7 items-end">
          <div className="max-w-[149px] ">
            <section>
              <h1 className="text-[64px] text-primary-purple font-semibold">
                300
                {/* {mostActiveUserCount} */}
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
          <Card className="p-5 space-y-4 mt-[30px] max-w-[189px]">
            <div className="flex items-center gap-3.5 text-primary-gray">
              <Image src={UsersIcon} alt="total users" />
              <h1>Users</h1>
            </div>
            <h1 className="text-5xl font-semibold">35k</h1>

            <LinearProgressBar
              value={60}
              className={"w-[150px]"}
              totalBarColor="#DECCFE"
              valueColor="#6e39cb"
            />
          </Card>
          <Card className="p-5 space-y-4 mt-[30px] max-w-[189px]">
            <div className="flex items-center gap-3.5 text-primary-gray">
              <Image src={ClicksIcon} alt="total users" />
              <h1>Clicks</h1>
            </div>
            <h1 className="text-5xl font-semibold">1m</h1>

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
              <h1>Sales</h1>
            </div>
            <h1 className="text-5xl font-semibold">345$</h1>

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
              <h1>Items</h1>
            </div>
            <h1 className="text-5xl font-semibold">68</h1>

            <LinearProgressBar
              value={60}
              className={"w-[150px]"}
              totalBarColor="#DECCFE"
              valueColor="#6e39cb"
            />
          </Card>
        </section>
      </Card>
      <section className="mt-[30px] w-full">
        <SalesByAge />
      </section>
    </div>
  );
};

export default BarChar;
