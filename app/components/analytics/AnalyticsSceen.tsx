import DeviceCategories from "./_components/DeviceCategory/DeviceCategories";
import SalesFunnelsChart from "./_components/SalesFunnelsChart";
import TopCountries from "./_components/TopCountries/TopCountries";
import WatchListsChart from "./_components/WatchLists/WatchLists";
import Withdraw from "./_components/Withdraw/Withdraw"; // or TopCountries

const AnalyticsScreen = () => {
  return (
    <div className="space-y-[30px] px-4">
      <Withdraw />

      <div className="flex flex-col xl:flex-row gap-[30px] w-full">
        <div className="flex-1 min-w-0 space-y-[30px]">
          <SalesFunnelsChart />
          <WatchListsChart />
        </div>

        <div className="w-full xl:w-[320px] shrink-0 space-y-[30px] flex gap-[30px] xl:flex-col">
          <DeviceCategories />
          <TopCountries />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsScreen;
