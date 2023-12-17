import "./App.css";
import Header from "./Components/Header";
import Landing from "./Pages/Landing";
import ContactUs from "./Pages/ContactUs";
import PropertiesPage from "./Pages/Properties";
import PropertiesDetails from "./Pages/PropertiesDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,

      children: [
        {
          index: true,
          element: <Landing />,
        },
        { path: "contactus", element: <ContactUs /> },
        { path: "properties", element: <PropertiesPage /> },
        { path: "single", element: <PropertiesDetails /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
