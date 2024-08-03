import {createContext, useState, useContext} from 'react';
import { registerRequest } from './../api/auth';

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('There is no AuthProvider');
    }
    return context;
};

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState({});
    const [isAuth, setIsAuth] = useState(false);

    const signUp = async (user) => {
        try {
            const res = await registerRequest(user)
            console.log(res.data);
            setUser(res.data);
            setIsAuth(true);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AuthContext.Provider value={{
            signUp,
            user,
            isAuth
        }}>
            {children}
        </AuthContext.Provider>
    );
};