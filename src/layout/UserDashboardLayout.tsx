import Navbar from "@/components/shared/Navbar";
import UserDashboardLeftBar from "@/components/UserDashboardLeftBar";
import { Outlet } from "react-router-dom";

const UserDashboardLayout = () => {
  return (
    <>
      <Navbar />
      <div className="lg:max-w-7xl mx-auto h-screen ">
        <div className="lg:grid lg:grid-cols-12 gap-4">
          {/* left bar */}
          <UserDashboardLeftBar />
          {/* right- main content */}
          <div className="col-span-9  h-screen w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboardLayout;
