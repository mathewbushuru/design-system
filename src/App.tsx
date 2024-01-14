import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import ThemeProvider from "@/components/theme-provider";
import RootLayout from "@/layouts/root-layout";

import HomePage from "@/pages/home-page";
import CompositesPage from "@/pages/composites-page";
import PrimitivesPage from "@/pages/primitives-page";
import ExamplesPage from "@/pages/examples-page";

import LearnCompany from "@/examples/learn-company/app";

import ButtonedInputShowcase from "@/showcase/composites/buttoned-input-showcase";

import ButtonShowcase from "@/showcase/primitives/button-showcase";
import CardShowcase from "@/showcase/primitives/card-showcase";
import InputShowcase from "@/showcase/primitives/input-showcase";
import DrawerShowCase from "@/showcase/primitives/drawer-showcase";
import DropdownMenuShowcase from "@/showcase/primitives/dropdown-menu-showcase";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <Navigate to="/" />,
  },
  {
    path: "/examples",
    element: <ExamplesPage />,
  },
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
    path: "/composites",
    element: <CompositesPage />,
  },
  {
    path: "/composites/buttoned-input",
    element: (
      <RootLayout>
        <ButtonedInputShowcase />
      </RootLayout>
    ),
  },
  {
    path: "/primitives",
    element: <PrimitivesPage />,
  },
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
]);

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
