import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isLoaded, userId } = useAuth();
  const navigate = useNavigate();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!userId) {
    navigate("/auth/sign-in");
  }

  return children;
};
