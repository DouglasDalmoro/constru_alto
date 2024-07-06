import { createBrowserRouter } from "react-router-dom";
import { ContactScreen, HomePageScreen } from "../ui/screen";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageScreen />,
  },
  {
    path: "/contact-us/:description?",
    element: <ContactScreen />,
  },
]);
