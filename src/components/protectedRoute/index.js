import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const ProtectedRoute = ({ children }) => {
  // const { token } = useContext(AuthContext);
  const [user] = useAuthState(auth);
  // const navigate = useNavigate();
  const location = useLocation();
  console.log(location)
  if (!user) {
    return <Navigate to={"/login"} replace state={{ intent: location }} />;
  }

  return children;
};

export default ProtectedRoute;
