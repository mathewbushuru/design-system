import { FC } from "react";

import { IconBrandTabler } from "@tabler/icons-react";

const topNavMockItems: string[] = [
  "Privacy &  Security",
  "Account Settings",
  "Support Options",
];

const bottomNavMockItems: string[] = [
  "Book a demo",
  "Documentation",
  "Community",
  "Academy",
  "Forums",
];

interface NavbarDividedHorizontalProps {}

const NavbarDividedHorizontal: FC<NavbarDividedHorizontalProps> = ({}) => {
  return (
    <>
      <div className="fixed top-0 h-20 w-full border border-gray-200 bg-white">
        <div className="mx-auto flex h-full max-w-7xl justify-between">
          {/* Logo left  */}
          <div className="flex grow items-center gap-2 px-4 text-teal-600 cursor-pointer hover:text-opacity-80">
            <IconBrandTabler width="48px" className="h-20" />
            <h1 className="flex h-20 items-center text-2xl font-bold">Logo</h1>
          </div>
          {/* Double nav right  */}
          <div className="flex grow flex-col px-4 text-gray-500">
            <div className="flex grow items-end  justify-end gap-4 uppercase ">
              {topNavMockItems.map((navItem) => (
                <div
                  key={navItem}
                  className="cursor-pointer text-xs hover:text-gray-900"
                >
                  {navItem}
                </div>
              ))}
            </div>
            <div className=" flex grow items-end justify-end gap-4 uppercase ">
              {bottomNavMockItems.map((navItem, index) => (
                <div
                  key={navItem}
                  className={`${
                    index === 0
                      ? "border-b-4 border-teal-600"
                      : " border-b-4 border-transparent"
                  } cursor-pointer pb-1 text-sm font-semibold hover:text-gray-700`}
                >
                  {navItem}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarDividedHorizontal;
