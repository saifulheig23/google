import MainLayout from "@/layout/MainLayout";
import UserDashboardLayout from "@/layout/UserDashboardLayout";
import AboutUs from "@/pages/AboutUs/AboutUs";
import { Dashboard } from "@/pages/Admin/Dashboard";
import Login from "@/pages/Auth/Login";
import LoginModal from "@/pages/Auth/LoginModal";
import SignUp from "@/pages/Auth/SignUp";
import VerifyOTP from "@/pages/Auth/VerifyOTP";
import Checkout from "@/pages/Checkout/Checkout";
import ContactUs from "@/pages/ContactUs/ContactUs";
import FacilityDetails from "@/pages/FacilityDetails/FacilityDetails";
import FacilityListing from "@/pages/FacilityListing/FacilityListing";
import UserProfile from "@/pages/User/UserProfile";
import ViewBookings from "@/pages/User/ViewBookings";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import { adminPaths } from "./admin.routes";
import AdminRoutes from "./AdminRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import ForgotPassword from "@/pages/Auth/ForgotPassword";
import ResetPassword from "@/pages/Auth/ResetPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "facilities",
        element: <FacilityListing />,
      },
      {
        path: `facilities/:id`,
        element: <FacilityDetails />,
      },
      {
        path: `checkout`,
        element: <Checkout />,
      },
      {
        path: "contact",
        element: (
          <ProtectedRoutes>
            <ContactUs />
          </ProtectedRoutes>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoutes>
            <UserProfile />
          </ProtectedRoutes>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "login1",
        element: <LoginModal />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
      {
        path: "verify",
        element: <VerifyOTP />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "reset-password/:token",
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: "/user",
    element: (
      <ProtectedRoutes>
        <UserDashboardLayout />
      </ProtectedRoutes>
    ),
    children: [
      {
        index: true,
        element: <UserProfile />,
      },
      {
        path: "bookings",
        element: <ViewBookings />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <AdminRoutes>
        <Dashboard />
      </AdminRoutes>
    ),
    children: adminPaths,
  },
]);
