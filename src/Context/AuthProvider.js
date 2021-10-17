import { createContext } from "react"
import useCart from "../hooks/useCart";
import useFirebase from "../hooks/useFirebase";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const carts = useCart();

    return (
        <AuthContext.Provider value={carts}>
            {children}
        </AuthContext.Provider>
    );
}


export default AuthProvider;