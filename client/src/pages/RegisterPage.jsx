import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const RegisterPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signUp, isAuth, errors: registerErrors } = useAuth();
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
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
            <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <h1 className="text-3xl font-bold text-center mb-5">Register</h1>
                {
                    registerErrors.map((error, index) => {
                        return <div className="bg-red-500 text-white p-2 my-2" key={index}>{error}</div>
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
            
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Register</button>
                </form>
                    <p className="flex gap-x-2 justify-between">Already have an account?<Link className="text-blue-500" to="/login">Login</Link></p>
            </div>
        </div>
    )
}

export default RegisterPage