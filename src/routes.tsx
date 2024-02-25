import RootLayout from "@/layouts/root-layout";

import LearnCompany from "@/examples/learn-company/app";
import TwistDawkins from "@/examples/twist-dawkins/app";

import ButtonedInputShowcase from "@/showcase/composites/buttoned-input-showcase";
import BrandButtonsShowcase from "@/showcase/composites/brand-buttons-showcase";

import ButtonShowcase from "@/showcase/primitives/button-showcase";
import CardShowcase from "@/showcase/primitives/card-showcase";
import InputShowcase from "@/showcase/primitives/input-showcase";
import DropdownMenuShowcase from "@/showcase/primitives/dropdown-menu-showcase";
import ResizableShowcase from "./showcase/primitives/resizable-showcase";
import SheetShowCase from "@/showcase/primitives/sheet-showcase";

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
  {
    path: "/examples/twist-dawkins",
    element: (
      <RootLayout>
        <div className="m-4 overflow-hidden rounded-md shadow-lg dark:border lg:mx-6">
          <TwistDawkins />
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
  {
    path: "/composites/brand-buttons",
    element: (
      <RootLayout>
        <BrandButtonsShowcase />
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
    path: "/primitives/dropdown-menu",
    element: (
      <RootLayout>
        <DropdownMenuShowcase />
      </RootLayout>
    ),
  },
  {
    path: "/primitives/resizable",
    element: (
      <RootLayout>
        <ResizableShowcase />
      </RootLayout>
    ),
  },
  {
    path: "/primitives/sheet",
    element: (
      <RootLayout>
        <SheetShowCase />
      </RootLayout>
    ),
  }
];
