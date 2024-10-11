import { Navigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import { loginUrl } from "../../constants/urls";

export function PrivateRoute({ children }) {
  const { user, isLoadingUser } = useUser();

  if (isLoadingUser) {
    return <h1>LOADING USER...</h1>;
  }

  if (!isLoadingUser && !user) {
    return <Navigate to={loginUrl} />;
  }

  return children;
}