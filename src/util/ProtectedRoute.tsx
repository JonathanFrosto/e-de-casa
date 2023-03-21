import { ReactElement, ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface protectedRouteProps {
  children: ReactElement
}

export const ProtectedRoute = ({children} : protectedRouteProps) => {
    const isAuth = !!localStorage.getItem("@ede-casa/token");
  
    if (isAuth) {
      return children;
    }
    
    return <Navigate to="/login" />;
}
