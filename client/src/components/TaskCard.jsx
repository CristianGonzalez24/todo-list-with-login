import { useTask } from '../context/TasksContext'
import { Link } from 'react-router-dom'

const TaskCard = ({ task }) => {

    const { deleteTask } = useTask();

    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <header className="flex justify-between">
                <h1 className="text-3xl font-bold">{task.title}</h1>
                <div className="flex gap-2 items-center">
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={() => deleteTask(task._id)}>
                        Delete
                    </button>
                    <Link to={`/tasks/${task._id}`} className="bg-blue-500 text-white px-4 py-2 rounded-md">Edit</Link>
                </div>
            </header>
            <p className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-1">{task.description}</p>
            <p>{new Date(task.date).toLocaleString().slice(0, 8)}</p>
        </div>
    )
}

export default TaskCard