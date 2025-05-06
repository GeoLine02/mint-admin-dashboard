import Image, { StaticImageData } from "next/image";
import classNames from "classnames";
import { IBillingInformation } from "@/app/types/account";

interface CardOptionProps {
  title: string;
  isSelected: boolean;
  cardIcon: StaticImageData;
  setBillingInfo: React.Dispatch<React.SetStateAction<IBillingInformation>>;
}

const CardOption = ({
  isSelected,
  title,
  cardIcon,
  setBillingInfo,
}: CardOptionProps) => {
  const selectedCardClasses = classNames("checkbox", {
    "border border-primary-purple rounded-md": isSelected,
    "border border-medium-gray rounded-md": !isSelected,
  });

  const handleChooseMethod = (method: "visa" | "paypal") => {
    setBillingInfo((prev) => ({
      ...prev,
      paymnetMethod: method,
    }));
  };

  return (
    <div
      onClick={() =>
        handleChooseMethod(title.toLowerCase() as "visa" | "paypal")
      }
      className={`${selectedCardClasses} p-5 flex w-full cursor-pointer`}
    >
      <div className="flex w-full justify-between">
        <div className="space-y-1">
          <h1 className="text-xl">347809</h1>
          <span>{title}</span>
        </div>
        <Image src={cardIcon} alt="visa icon" />
      </div>
    </div>
  );
};

export default CardOption;
