import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Offers from "../pages/Offers/Offers/Offers";
import Order from "../pages/OrderShop/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import Contact from "../pages/Home/Contact/Contact";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddProducts from "../pages/Dashboard/AddProducts/AddProducts";
import AdminRoute from "./AdminRoute";
import ManageProducts from "../pages/Dashboard/ManageProducts/ManageProducts";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import Checkout from "../pages/Dashboard/Checkout/Checkout";
import ConfirmOrder from "../pages/Dashboard/ConfirmOrder/ConfirmOrder";
import OrderProducts from "../pages/Dashboard/OrderProducts/OrderProducts";
import SuccessPage from "../pages/Dashboard/Payment/SuccessPage";
import FailedPage from "../pages/Dashboard/Payment/FailedPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/offer",
        element: <Offers></Offers>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "myCart",
        element: <MyCart></MyCart>,
      },
      {
        path: "success",
        element: <SuccessPage></SuccessPage>,
      },
      {
        path: "failed",
        element: <FailedPage></FailedPage>,
      },
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "confirmation",
        element: <ConfirmOrder></ConfirmOrder>,
      },
      {
        path: "order",
        element: (
          <AdminRoute>
            <OrderProducts></OrderProducts>
          </AdminRoute>
        ),
      },
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "allUsers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "manage",
        element: (
          <AdminRoute>
            <ManageProducts></ManageProducts>
          </AdminRoute>
        ),
      },
      {
        path: "addProducts",
        element: (
          <AdminRoute>
            <AddProducts></AddProducts>
          </AdminRoute>
        ),
      },
    ],
  },
]);
