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
    const [errors, setErrors] = useState([]);

    const signUp = async (user) => {
        try {
            const res = await registerRequest(user)
            console.log(res.data);
            setUser(res.data);
            setIsAuth(true);
        } catch (error) {
            setErrors(error.response.data);
        }
    };

    return (
        <AuthContext.Provider value={{
            signUp,
            user,
            isAuth,
            errors
        }}>
            {children}
        </AuthContext.Provider>
    );
};