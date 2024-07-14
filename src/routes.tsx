import RootLayout from "@/layouts/root-layout";

import LearnCompany from "@/examples/learn-company/app";
import TwistDawkins from "@/examples/twist-dawkins/app";

import ButtonedInputShowcase from "@/showcase/composites/buttoned-input-showcase";
import CompositeButtonsShowcase from "@/showcase/composites/composite-buttons-showcase";

import ButtonShowcase from "@/showcase/primitives/button-showcase";
import CardShowcase from "@/showcase/primitives/card-showcase";
import InputShowcase from "@/showcase/primitives/input-showcase";
import DropdownMenuShowcase from "@/showcase/primitives/dropdown-menu-showcase";
import ResizableShowcase from "@/showcase/primitives/resizable-showcase";
import SheetShowCase from "@/showcase/primitives/sheet-showcase";

export const exampleRoutes = [
  {
    path: "/examples/learn-company",
    element: (
      <RootLayout key="learn-company">
        <div className="m-4 overflow-hidden rounded-md shadow-lg dark:border lg:mx-6">
          <LearnCompany />
        </div>
      </RootLayout>
    ),
  },
  {
    path: "/examples/twist-dawkins",
    element: (
      <RootLayout key="twistdawkins-company">
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
      <RootLayout key="buttoned-input">
        <ButtonedInputShowcase />
      </RootLayout>
    ),
  },
  {
    path: "/composites/composite-buttons",
    element: (
      <RootLayout key="composite-buttons">
        <CompositeButtonsShowcase />
      </RootLayout>
    ),
  },
];

export const primitivesRoutes = [
  {
    path: "/primitives/button",
    element: (
      <RootLayout key="button">
        <ButtonShowcase />
      </RootLayout>
    ),
  },
  {
    path: "/primitives/card",
    element: (
      <RootLayout key="card">
        <CardShowcase />
      </RootLayout>
    ),
  },
  {
    path: "/primitives/input",
    element: (
      <RootLayout key="input">
        <InputShowcase />
      </RootLayout>
    ),
  },
  {
    path: "/primitives/dropdown-menu",
    element: (
      <RootLayout key="dropdown-menu">
        <DropdownMenuShowcase />
      </RootLayout>
    ),
  },
  {
    path: "/primitives/resizable",
    element: (
      <RootLayout key="resizable">
        <ResizableShowcase />
      </RootLayout>
    ),
  },
  {
    path: "/primitives/sheet",
    element: (
      <RootLayout key="sheet">
        <SheetShowCase />
      </RootLayout>
    ),
  },
];
