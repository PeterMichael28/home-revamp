import { Navigate, Outlet } from "react-router-dom";
import { useUserStore } from "~/store/userStore";

const ProtectedAdminRoutes = () => {
  const token = useUserStore((state) => state.token);

  if (!token) return <Navigate to="/admin/login" />;

  return <Outlet />;
};

export default ProtectedAdminRoutes;
