import "./App.css";
import Header from "./Components/Header";
import Landing from "./Pages/Landing";
import ContactUs from "./Pages/ContactUs";
import PropertiesPage from "./Pages/Properties";
import PropertiesDetails from "./Pages/PropertiesDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useRef } from "react";
function App() {
  const formRef = useRef();

  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };
  console.log(formRef);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header scroll={scrollToForm} />,

      children: [
        {
          index: true,
          element: <Landing form={formRef} scroll={scrollToForm} />,
        },
        { path: "contactus", element: <ContactUs /> },
        { path: "properties", element: <PropertiesPage /> },
        {
          path: "single",
          element: <PropertiesDetails scroll={scrollToForm} />,
        },
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
