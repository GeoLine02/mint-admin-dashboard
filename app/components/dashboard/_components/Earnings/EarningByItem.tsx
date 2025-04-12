import Card from "@/app/components/ui/Card";
import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Bento3DKitIcon from "@/public/BentoIllustrationIcon.png";
import BentoCodedTemplateIcon from "@/public/BentoCOdedTemplateIcon.png";
import Bento3DKitIcon2 from "@/public/BentoIllustrationIcon.png";

const EarningByItem = () => {
  return (
    <Card className="p-[30px] space-y-[30px] w-full">
      <h1 className="text-xl">Earning by item</h1>
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-2">
          <Image src={Bento3DKitIcon} alt="bento 3D kit" />
          <div>
            <h2>Bento 3D kit</h2>
            <span className="text-[#89868D]">Illustration</span>
          </div>
        </div>
        <ArrowForwardIosIcon />
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-2">
          <Image src={BentoCodedTemplateIcon} alt="bento 3D kit" />
          <div>
            <h2>Bento 3D kit</h2>
            <span className="text-[#89868D]">Coded Template</span>
          </div>
        </div>
        <ArrowForwardIosIcon />
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-2">
          <Image src={Bento3DKitIcon2} alt="bento 3D kit" />
          <div>
            <h2>Bento 3D kit</h2>
            <span className="text-[#89868D]">Illustration </span>
          </div>
        </div>
        <ArrowForwardIosIcon />
      </div>
    </Card>
  );
};

export default EarningByItem;
