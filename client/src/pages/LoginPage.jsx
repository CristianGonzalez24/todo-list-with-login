import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const LoginPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signIn, errors: signInErrors, isAuth } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit( async (data) => {
    await signIn(data)
  })

  useEffect(() => {
    if(isAuth) navigate('/tasks');
  }, [isAuth])

  return (
  <div className="flex h-[calc(100vh-100px)] items-center justify-center">
    <div className="w-full max-w-md p-10 rounded-md bg-gray-50">
      <h1 className="text-[#002765] text-3xl font-bold text-center mb-5">Login</h1>
      {
        signInErrors.map((error, index) => {
            return <div className="p-2 my-2 text-white bg-red-500" key={index}>{error}</div>
        })
      }
      <form onSubmit={onSubmit}>
        <input 
        type="email" 
        placeholder="Email" 
        {...register('email', { required: true })} 
        className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-2"/>
        {
          errors.email && <p className="text-red-500">Email is required</p>
        }
        
        <input 
        type="password" 
        placeholder="Password" 
        {...register('password', { required: true })} 
        className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-2"/>
        {
          errors.password && <p className="text-red-500">Password is required</p>
        }
        
        <button type="submit" className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Sign in</button>
      </form>
        <p className="flex justify-between mt-2 gap-x-2">Don't have an account?<Link className="text-blue-500 hover:text-orange-500" to="/register">Register</Link></p>
    </div>
  </div>
  )
}

export default LoginPage