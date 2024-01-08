import { createBrowserRouter,RouterProvider } from "react-router-dom";

import ThemeProvider from "@/components/theme-provider";

import HomePage from "@/pages/home-page";
import ShowcasePage from "./pages/showcase-page";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/showcase",
      element: <ShowcasePage />
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
