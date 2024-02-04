import RootLayout from "@/layouts/root-layout";

import LearnCompany from "@/examples/learn-company/app";

import ButtonedInputShowcase from "@/showcase/composites/buttoned-input-showcase";

import ButtonShowcase from "@/showcase/primitives/button-showcase";
import CardShowcase from "@/showcase/primitives/card-showcase";
import InputShowcase from "@/showcase/primitives/input-showcase";
import DrawerShowCase from "@/showcase/primitives/drawer-showcase";
import DropdownMenuShowcase from "@/showcase/primitives/dropdown-menu-showcase";

export const exampleRoutes = [
  {
    path: "/examples/learn-company",
    element: (
      <RootLayout>
        <div className="m-4 overflow-hidden rounded-md shadow-lg dark:border lg:mx-6">
          <LearnCompany />
        </div>
      </RootLayout>
    ),
  },
];

export const compositesRoutes = [
  {
    path: "/composites/buttoned-input",
    element: (
      <RootLayout>
        <ButtonedInputShowcase />
      </RootLayout>
    ),
  },
];

export const primitivesRoutes = [
  {
    path: "/primitives/button",
    element: (
      <RootLayout>
        <ButtonShowcase />
      </RootLayout>
    ),
  },
  {
    path: "/primitives/card",
    element: (
      <RootLayout>
        <CardShowcase />
      </RootLayout>
    ),
  },
  {
    path: "/primitives/input",
    element: (
      <RootLayout>
        <InputShowcase />
      </RootLayout>
    ),
  },
  {
    path: "/primitives/drawer",
    element: (
      <RootLayout>
        <DrawerShowCase />
      </RootLayout>
    ),
  },
  {
    path: "/primitives/dropdown-menu",
    element: (
      <RootLayout>
        <DropdownMenuShowcase />
      </RootLayout>
    ),
  },
];
