import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export default function UserContextProvider({ children }) {
    const [user, setUser] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, (user) => {
            console.log(user);
            setLoading(false);
            setUser(user);
            if (user) {
                navigate("/dashboard");
            }
        });
        return () => unsuscribe();
    }, []);

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    };

    return (
        <UserContext.Provider value={{ user, login, logout, setUser, loading }}>
            {children}
        </UserContext.Provider>
    );
}

// mini Hook para no estar llamando a cada rato a useContext
export const useUserContext = () => useContext(UserContext);
