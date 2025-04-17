import Card from "@/app/components/ui/Card";
import { topCountries } from "@/app/mock/analtyicsData";
import TopCountryCard from "./TopCountryCard";

const TopCountries = () => {
  return (
    <Card className="bg-white p-[30px] max-w-[400px] h-full w-full space-y-[30px] max-h-[354px]">
      <h1 className="text-xl font-medium">TopCountries</h1>
      <div className="space-y-[30px]">
        {topCountries.map((country) => (
          <TopCountryCard
            key={country.countryName}
            countryFlag={country.countryFlag}
            countryName={country.countryName}
            countryPercentage={country.countryPercentage}
          />
        ))}
      </div>
    </Card>
  );
};

export default TopCountries;
