import { useTask } from '../context/TasksContext';
import { useEffect } from 'react';
import TaskCard from './../components/TaskCard';

const TasksPage = () => {

    const { getTasks, tasks } = useTask();

    useEffect(() => {
        getTasks();
    }, [])

    if(tasks.length === 0) return <div className="flex h-[calc(100vh-100px)] items-center justify-center"><h1 className="text-3xl text-gray-50 font-bold text-center">You have no pending tasks. Enjoy your time!</h1></div>


    return (
        <div className="grid gap-4 p-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {
                    tasks.map(task => 
                        <TaskCard key={task._id} task={task} />
                    )
                }
        </div>
    )
}

export default TasksPage