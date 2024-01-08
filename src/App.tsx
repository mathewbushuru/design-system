import { createBrowserRouter,RouterProvider } from "react-router-dom";

import ThemeProvider from "@/components/theme-provider";
import HomePage from "@/pages/home-page";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
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
