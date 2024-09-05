import AddFacility from "@/pages/Admin/AddFacility";
import AdminWelcome from "@/pages/Admin/AdminWelcome";
import Bookings from "@/pages/Admin/Bookings";
import ManageFacilities from "@/pages/Admin/ManageFacilities";

export const adminPaths = [
  {
    path: "welcome",
    element: <AdminWelcome />,
  },
  {
    path: "add-facility",
    element: <AddFacility />,
  },
  {
    path: "facilities",
    element: <ManageFacilities />,
  },
  {
    path: "bookings",
    element: <Bookings/>
  },
];
