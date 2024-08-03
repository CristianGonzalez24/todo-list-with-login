import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signUp, isAuth } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuth) {
            navigate('/tasks');
        }
    }, [isAuth])
    

    const onSubmit = handleSubmit( async (data) => {
        await signUp(data)
    })

    return (
        <div className="bg-zinc-800 max-w-md mx-auto p-10 rounded-md">
            <form onSubmit={onSubmit}>
                <input 
                type="text" 
                placeholder="Name"
                {...register('name', { required: true })} 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-2"/>
            
                <input 
                type="email" 
                placeholder="Email" 
                {...register('email', { required: true })} 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-2"/>
                
                <input 
                type="password" 
                placeholder="Password" 
                {...register('password', { required: true })} 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-2"/>
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default RegisterPage