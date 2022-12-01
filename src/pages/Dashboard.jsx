import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Dashboard = () => {
    const { logout, user } = useUserContext();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout().finally(() => {
            navigate("/");
        });
    };

    return (
        <Container maxWidth="md">
            <h1>Dashboard</h1>
            <h2>"Dashboard Solo personas autenticadas"</h2>
            <h3>email: {user?.email}</h3>
            <Button variant="contained" onClick={handleLogout}>
                SignOut
            </Button>
        </Container>
    );
};
export default Dashboard;
