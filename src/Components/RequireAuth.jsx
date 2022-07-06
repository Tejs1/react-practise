import { Navigate } from "react-router-dom";
import { useLogin } from "../Context/auth-context";

export default function RequireAuth({ children }) {
  const { login } = useLogin();
  return login ? children : <Navigate to="/login" replace />;
}
