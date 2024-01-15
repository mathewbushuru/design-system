import AmdSvg from "@/assets/amd-svg";
import AwsSvg from "@/assets/aws-svg";
import GoogleSvg from "@/assets/google-svg";
import IbmSvg from "@/assets/ibm-svg";
import KaggleSvg from "@/assets/kaggle-svg";
import FacebookSvg from "@/assets/facebook-svg";
import AppleSvg from "@/assets/apple-svg";
import IntelSvg from "@/assets/intel-svg";

export default function PartnerCompanies() {
  return (
    <div className="bg-muted p-4 text-foreground/80 lg:p-8">
      <h1 className="mb-4 mt-8 px-4 text-center text-2xl">
        We collaborate with{" "}
        <span className="text-primary">
          300+ leading universities and companies
        </span>
      </h1>
      <div className="mb-8 flex flex-wrap items-center justify-center gap-5 px-2 sm:gap-12">
        <AwsSvg className="h-10 " />
        <AmdSvg className="h-14 " />
        <FacebookSvg className="h-7 " />
        <IbmSvg className="h-16 " />
        <GoogleSvg className="h-7 " />
        <KaggleSvg className="h-20 " />
        <AppleSvg className="h-8 " />
        <IntelSvg className="h-16 " />
      </div>
    </div>
  );
}
