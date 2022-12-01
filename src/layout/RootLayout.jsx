import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";

import UserContextProvider from "../context/UserContext";

const RootLayout = () => {
    return (
        <UserContextProvider>
            <CssBaseline />
            <Outlet />
        </UserContextProvider>
    );
};
export default RootLayout;
