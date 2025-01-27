import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const { isLoaded, userId } = useAuth();
  const navigate = useNavigate();
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (userId) {
    navigate("/dashboard");
  }

  return children;
};
