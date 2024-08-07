import {createContext, useState, useContext, useEffect} from 'react';
import { registerRequest, loginRequest, verifyTokenRequest } from './../api/auth';
import Cookies from 'js-cookie';

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
            setUser(res.data);
            setIsAuth(true);
        } catch (error) {
            if(Array.isArray(error.response.data)) {
                setErrors(error.response.data);
            }
            setErrors([error.response.data]);
        }
    };

    const signIn = async (user) => {
        try {
            const res = await loginRequest(user)
            setUser(res.data);
            setIsAuth(true);
        } catch (error) {
            if(Array.isArray(error.response.data)) {
                setErrors(error.response.data);
            }
            setErrors([error.response.data]);

        }
    };

useEffect(() => {
    if(errors.length > 0) {
        const timer = setTimeout(() => {
            setErrors([]);
        }, 8000);
        return () => clearTimeout(timer);
    }
}, [errors]);

useEffect(() => {
    async function checkLogin() {
        const cookies = Cookies.get('token');
        if(cookies.token) {
            try {
                const res = await verifyTokenRequest(cookies.token);
                if(!res.data) return setIsAuth(false);
                setUser(res.data);
                setIsAuth(true);
            } catch (error) {
                setUser({});
                setIsAuth(false);
            }
        }
    }
    checkLogin();
}, []);

    return (
        <AuthContext.Provider value={{
            signUp,
            signIn,
            user,
            isAuth,
            errors
        }}>
            {children}
        </AuthContext.Provider>
    );
};