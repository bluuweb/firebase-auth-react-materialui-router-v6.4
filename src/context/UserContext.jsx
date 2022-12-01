import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { auth, authPromise } from "../firebase";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

const logout = () => {
    return signOut(auth);
};

export default function UserContextProvider({ children }) {
    const [user, setUser] = useState(false);

    return (
        <UserContext.Provider value={{ user, login, logout, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

// mini Hook para no estar llamando a cada rato a useContext
export const useUserContext = () => useContext(UserContext);
