import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const NavBar = () => {

    const { isAuth, logout, user } = useAuth()

    return (
        <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-md">
            <Link to="/"><h1 className="text-3xl font-bold">ToDo App</h1></Link>
            <ul className="flex gap-5">
                {isAuth ? 
                (
                    <>
                    <li>Welcome {user.name}</li>
                    <li><Link to="/tasks">Tasks</Link></li>
                    <li><Link to="/add-task" className="bg-indigo-500 px-4 py-1 rounded-md">Add Task</Link></li>
                    <li><Link to="/" onClick={() => logout()}>Logout</Link></li>
                    </>
                ) 
                : 
                (
                    <>
                    <li><Link to="/register" className="bg-indigo-500 px-4 py-1 rounded-md">Register</Link></li>
                    <li><Link to="/login" className="bg-indigo-500 px-4 py-1 rounded-md">Login</Link></li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default NavBar