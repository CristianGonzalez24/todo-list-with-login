import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

const ProtectedRoute = () => {
    const { loading, isAuth } = useAuth();

    if(loading) return <div className="text-center">Loading...</div>
    if (!loading && !isAuth) return <Navigate to="/login" replace/>

    return <Outlet />
}

export default ProtectedRoute