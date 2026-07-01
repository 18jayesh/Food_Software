import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AuthRedirect() {

    const { user } = useAuth();

    if (user) {

        return <Navigate to="/home" replace />;

    }

    return <Navigate to="/login" replace />;

}