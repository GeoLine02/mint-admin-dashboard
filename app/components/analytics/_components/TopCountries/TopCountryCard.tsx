import Image, { StaticImageData } from "next/image";

interface ITopCountryCardProps {
  countryFlag: StaticImageData;
  countryName: string;
  countryPercentage: number;
}

const TopCountryCard = ({
  countryFlag,
  countryName,
  countryPercentage,
}: ITopCountryCardProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-3 items-center">
        <Image
          className="w-[34px] aspect-square"
          src={countryFlag}
          alt={countryName}
        />
        <h1>{countryName}</h1>
      </div>
      <h1>{countryPercentage}%</h1>
    </div>
  );
};

export default TopCountryCard;
