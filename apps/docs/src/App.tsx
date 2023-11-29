import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "@/pages/home-page";
import ButtonPage from "@/pages/component-pages/button-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/components/button",
    element: <ButtonPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
