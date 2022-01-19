import { ReactNode, FC } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const location = useLocation();

  const isAuthorized = JSON.parse(
    localStorage.getItem("authorized") || "false"
  );

  if (isAuthorized) {
    return <>{children}</>;
  }

  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
