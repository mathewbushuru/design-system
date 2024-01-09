import { createBrowserRouter,RouterProvider, Navigate } from "react-router-dom";

import ThemeProvider from "@/components/theme-provider";

import HomePage from "@/pages/home-page";
import ComponentsPage from "@/pages/components-page";
import ExamplesPage from "@/pages/examples-page";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <Navigate to="/" />
    },
    {
      path: "/examples",
      element: <ExamplesPage />
    },
    {
      path: "/components",
      element: <ComponentsPage />
    }
])

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
