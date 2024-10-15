import { useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {

    const { isAuth, logout, user } = useAuth()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="items-center px-10 py-5 rounded-md bg-gray-50 md:flex md:justify-between">
            <div className="flex items-center justify-between w-full">
                
                <Link to={isAuth ? "/tasks" : "/"}><h1 className="text-3xl text-[#002765] font-bold">Task Manager</h1></Link>

                <FontAwesomeIcon 
                icon={isOpen ? faClose : faBars} 
                className="text-3xl cursor-pointer md:hidden" 
                onClick={() => setIsOpen(!isOpen)} 
                aria-expanded={isOpen} 
                />

                <div className={`absolute xl:hidden top-20 left-0 w-full bg-gray-50 flex flex-col items-center gap-4 font-semibold text-lg transition-all duration-300 ease-in-out ${isOpen ? 'block opacity-100' : 'hidden opacity-0'}`}>
                    <li className="w-full p-4 text-center list-none transition-all hover:bg-orange-500 hover:text-white"><Link to="/register" onClick={() => setIsOpen(!isOpen)}>Register</Link></li>
                    <li className="w-full p-4 text-center list-none transition-all hover:bg-orange-500 hover:text-white"><Link to="/login" onClick={() => setIsOpen(!isOpen)}>Login</Link></li>
                </div>

            </div>

            <ul className="hidden md:flex justify-end items-center text-center font-semibold text-[#002765] w-full">
                {isAuth ? 
                (
                    <>
                    <li className="px-3.5 py-2 font-bold">Welcome {user.name}</li>
                    <li><Link to="/tasks" className="hover:bg-orange-500 hover:text-white rounded-md px-3.5 py-2.5 transition-all">Tasks</Link></li>
                    <li><Link to="/add-task" className="hover:bg-orange-500 hover:text-white rounded-md px-3.5 py-2 transition-all">Add Task</Link></li>
                    <li><Link to="/" className="hover:bg-red-500 hover:text-white rounded-md px-3.5 py-2 transition-all" onClick={() => logout()}>Logout</Link></li>
                    </>
                ) 
                : 
                (
                    <>
                    <li><Link to="/register" className="hover:bg-orange-500 hover:text-white focus:ring focus:ring-orange-300 rounded-md px-3.5 py-2.5 text-center transition-all">Register</Link></li>
                    <li><Link to="/login" className="hover:bg-orange-500 hover:text-white focus:ring focus:ring-orange-300 rounded-md px-3.5 py-2.5 text-center transition-all">Login</Link></li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default NavBar