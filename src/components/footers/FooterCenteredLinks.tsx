import { FC } from "react";
import {
  IconBrandTabler,
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";

interface FooterCenteredLinksProps {}

const FooterCenteredLinks: FC<FooterCenteredLinksProps> = ({}) => {
  return (
    <div className="flex flex-col gap-2 pb-4 pt-2 sm:flex-row sm:items-center sm:justify-between sm:px-2 sm:pt-4">
      <div className="flex items-center justify-center gap-1 text-lg font-bold text-teal-600 ">
        <IconBrandTabler className="hover:cursor-pointer" />
        <span className="</span>">LOGO</span>
      </div>

      <ul className="flex justify-center gap-2 text-sm ">
        <li className="hover:cursor-pointer hover:underline">Contact</li>
        <li className="hover:cursor-pointer hover:underline">Privacy</li>
        <li className="hover:cursor-pointer hover:underline">Blog</li>
        <li className="hover:cursor-pointer hover:underline">Store</li>
        <li className="hover:cursor-pointer hover:underline">Careers</li>
      </ul>

      <div className="flex items-center justify-center gap-2">
        <div className="rounded-full border p-1 hover:cursor-pointer">
          <IconBrandTwitter size="20px" />
        </div>
        <div className="rounded-full border p-1 hover:cursor-pointer">
          <IconBrandYoutube size="20px" />
        </div>
        <div className="rounded-full border p-1 hover:cursor-pointer">
          <IconBrandInstagram size="20px" />
        </div>
      </div>
    </div>
  );
};

export default FooterCenteredLinks;
