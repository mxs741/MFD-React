import { Navigate, Outlet } from "react-router-dom";
import { Paths } from "../../constants/const";
import { useAuth } from "../../context/AuthProvider/AuthProvider";

export const PrivateRoute = (): JSX.Element => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={Paths.Login} replace />;
  }

  return <Outlet />;
};
