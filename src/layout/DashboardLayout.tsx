import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <div className="">
        <Outlet />
      </div>
    </>
  );
};

export default DashboardLayout;
