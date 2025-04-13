import ActiveUsers from "./_components/ActiveUsers/ActiveUsers";
import EarningByItem from "./_components/Earnings/EarningByItem";
import EarningThisMonth from "./_components/Earnings/EarningThisMonth";
import Impressions from "./_components/Impressions/Impressions";
import SalesByAge from "./_components/Sales/SalesByAge";

const DashboardSceen = () => {
  return (
    <div className="3xl:flex gap-[30px] w-full">
      <div className="w-full 3xl:w-[80%] space-y-[30px]">
        <ActiveUsers />
        <SalesByAge />
      </div>
      <div className="flex w-full 3xl:block 3xl:w-[20%] space-y-[30px] gap-[30px] mt-[30px] 3xl:mt-0">
        <EarningThisMonth />
        <EarningByItem />
        <Impressions />
      </div>
    </div>
  );
};

export default DashboardSceen;
