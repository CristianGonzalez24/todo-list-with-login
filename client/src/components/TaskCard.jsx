import { useTask } from '../context/TasksContext'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

const TaskCard = ({ task }) => {

    const { deleteTask } = useTask();

    return (
        <div className="w-full max-w-md p-10 rounded-md bg-zinc-50">
            <header className="flex justify-between">
                <h1 className="text-3xl text-[#002765] font-bold">{task.title}</h1>
                <div className="flex items-center gap-2">
                    <button className="bg-[#ff3333] hover:bg-red-600 text-white px-4 py-2 rounded-md" onClick={() => deleteTask(task._id)}>
                        Delete
                    </button>
                    <Link to={`/tasks/${task._id}`} className="px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600">Edit</Link>
                </div>
            </header>
            <p className="w-full px-4 py-2 my-2 text-white bg-gray-400 rounded-md">{task.description}</p>
            <p className="font-semibold text-[#002765] my-1">{dayjs(task.date).utc().format('DD/MM/YYYY')}</p>
        </div>
    )
}

export default TaskCard