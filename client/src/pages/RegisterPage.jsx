import { useForm } from 'react-hook-form';
import { registerRequest } from './../api/auth';

const RegisterPage = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit( async (data) => {
        const res = await registerRequest(data)
        console.log(res);
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