import { Home } from "lucide-react";
import { NavLink } from "react-router-dom";

const UserDashboardLeftBar = () => {
  return (
    <>
      <div className="col-span-3  h-screen">
        <div className="px-2 py-4  lg:mt-20">
          <div className="mb-4 rounded-full w-36 h-36 mx-auto">
            <img
              className="rounded-full object-cover w-full"
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
              alt=""
            />
          </div>
          <div className="text-center">
            <h4 className=" font-semibold text-xl">Ragib Shariar</h4>
            <p>srragib@gmail.com</p>
          </div>
        </div>
        <div>
          <div className="mt-5">
            <nav className="grid items-start text-sm font-medium lg:px-0">
              <NavLink
                to="" end
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 mt-1 py-2  transition-all hover:bg-gradient hover:text-white text-lg ${
                    isActive ? "bg-gradient text-white" : ""
                  }`
                }
              >
                <Home className="h-4 w-4" />
                Profile
              </NavLink>
              <NavLink
                to="bookings"
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 mt-1 py-2  transition-all hover:bg-gradient hover:text-white text-lg ${
                    isActive ? "bg-gradient text-white" : ""
                  }`
                }
              >
                <Home className="h-4 w-4" />
                My Bookings
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboardLeftBar;
