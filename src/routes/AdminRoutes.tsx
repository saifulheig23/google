import { useCurrentToken, userRole } from "@/redux/features/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const AdminRoutes = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(useCurrentToken);
  const role = useAppSelector(userRole);

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  if (role !== "admin") {
    return <Navigate to="/" replace={true} />;
  }

  return children;
};

export default AdminRoutes;
