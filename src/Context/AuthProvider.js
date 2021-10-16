import { createContext } from "react"
import useFirebase from "../hooks/useFirebase";
import useLoadData from "../hooks/useLoadData";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const allContext = useFirebase();
    const loadData = useLoadData();

    return (
        <AuthContext.Provider value={loadData}>
            {children}
        </AuthContext.Provider>
    );
}


export default AuthProvider;