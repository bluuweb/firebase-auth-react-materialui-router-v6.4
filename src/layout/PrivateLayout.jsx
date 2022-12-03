import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const PrivateLayout = () => {
    const { user, loading } = useUserContext();

    if (loading) {
        return <div>Loading...</div>;
    }

    return <>{user ? <Outlet /> : <Navigate to="/" />}</>;
};
export default PrivateLayout;
