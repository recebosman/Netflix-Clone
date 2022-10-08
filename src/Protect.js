import { Navigate } from "react-router-dom";
import { useAuth } from "./context/Auth";

export const Protect = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/signin" />;
  } else {
    return children;
  }
};
