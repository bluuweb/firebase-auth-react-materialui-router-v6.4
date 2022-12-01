import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { authPromise } from "../firebase";

const PrivateLayout = () => {
    const { user, setUser } = useUserContext();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("Pasó por aquí....");
        setLoading(true);
        authPromise()
            .then((user) => {
                setUser(user);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return <>{user ? <Outlet /> : <Navigate to="/" />}</>;
};
export default PrivateLayout;
