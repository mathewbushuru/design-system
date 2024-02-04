import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import ThemeProvider from "@/components/theme-provider";

import HomePage from "@/pages/home-page";
import ExamplesPage from "@/pages/examples-page";
import CompositesPage from "@/pages/composites-page";
import PrimitivesPage from "@/pages/primitives-page";

import { exampleRoutes, compositesRoutes, primitivesRoutes } from "@/routes";

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
  ...exampleRoutes,
  {
    path: "/composites",
    element: <CompositesPage />,
  },
  ...compositesRoutes,
  {
    path: "/primitives",
    element: <PrimitivesPage />,
  },
  ...primitivesRoutes,
]);

export default function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
