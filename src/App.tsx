import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import ThemeProvider from "@/components/theme-provider";
import RootLayout from "@/layouts/root-layout";

import HomePage from "@/pages/home-page";
import ComponentsPage from "@/pages/components-page";
import ExamplesPage from "@/pages/examples-page";

import LearnCompany from "./showcase/examples/learn-company/app";

import ButtonShowcase from "@/showcase/components/button-showcase";
import InputShowcase from "./showcase/components/input-showcase";
import DrawerShowCase from "@/showcase/components/drawer-showcase";
import DropdownMenuShowcase from "@/showcase/components/dropdown-menu-showcase";

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
    path: "/components",
    element: <ComponentsPage />,
  },
  {
    path: "/components/button",
    element: (
      <RootLayout>
        <ButtonShowcase />
      </RootLayout>
    ),
  },
  {
    path: "/components/input",
    element: (
      <RootLayout>
        <InputShowcase />
      </RootLayout>
    ),
  },
  {
    path: "/components/drawer",
    element: (
      <RootLayout>
        <DrawerShowCase />
      </RootLayout>
    ),
  },
  {
    path: "/components/dropdown-menu",
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
