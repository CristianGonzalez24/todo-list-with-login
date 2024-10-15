import { useTask } from '../context/TasksContext'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

const TaskCard = ({ task }) => {

    const { deleteTask } = useTask();

    return (
        <div className="bg-zinc-50 max-w-md w-full p-10 rounded-md">
            <header className="flex justify-between">
                <h1 className="text-3xl text-[#002765] font-bold">{task.title}</h1>
                <div className="flex gap-2 items-center">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md" onClick={() => deleteTask(task._id)}>
                        Delete
                    </button>
                    <Link to={`/tasks/${task._id}`} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">Edit</Link>
                </div>
            </header>
            <p className="w-full bg-gray-400 text-white px-4 py-2 rounded-md my-2">{task.description}</p>
            <p className="font-semibold text-[#002765] my-1">{dayjs(task.date).utc().format('DD/MM/YYYY')}</p>
        </div>
    )
}

export default TaskCard