import React, { ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface PropTypes {
  isAllowed: boolean;
  redirectPath?: string;
  children: ReactElement;
}

const ProtectedRoute = ({ isAllowed, redirectPath = "/login", children }: PropTypes) => {
  if (!isAllowed) {
    return <Navigate replace to={redirectPath} />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
