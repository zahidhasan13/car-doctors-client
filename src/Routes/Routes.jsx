import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails/ServiceDetails";
import Checkout from "../Pages/Checkout/Checkout";
import Profile from "../Pages/Profile/Profile";
import PrivateRoutes from "./PrivateRoutes";
import ServiceCart from "../Pages/ServiceCart/ServiceCart";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "profile",
          element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
        },
        {
          path: "about",
          element: <About></About>
        },
        {
          path: "services",
          element: <Services></Services>
        },
        {
          path: "blog",
          element: <Blog></Blog>
        },
        {
          path: "contact",
          element: <Contact></Contact>
        },
        {
          path: "services/:id",
          element: <PrivateRoutes><ServiceDetails></ServiceDetails></PrivateRoutes>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: "checkout/:id",
          element: <Checkout></Checkout>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: "servicesCart",
          element: <PrivateRoutes><ServiceCart></ServiceCart></PrivateRoutes>,
        },
      ]
    },
    {
        path: "login",
        element: <Login></Login>
    },
    {
        path: "register",
        element: <Register></Register>
    },
  ]);

  export default router;