import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signUp, isAuth, errors: authErrors } = useAuth();
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
            {
                authErrors.map((error, index) => {
                    return <div className="bg-red-500 text-white p-2" key={index}>{error}</div>
                })
            }
            <form onSubmit={onSubmit}>
                <input 
                type="text" 
                placeholder="Name"
                {...register('name', { required: true })} 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-2"/>
                {
                    errors.name && <p className="text-red-500">Name is required</p>
                }
            
                <input 
                type="email" 
                placeholder="Email" 
                {...register('email', { required: true })} 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-2"/>
                {
                    errors.email && <p className="text-red-500">Email is required</p>
                }
                
                <input 
                type="password" 
                placeholder="Password" 
                {...register('password', { required: true })} 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-2"/>
                {
                    errors.password && <p className="text-red-500">Password is required</p>
                }

                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default RegisterPage