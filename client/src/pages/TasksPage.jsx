import { useTask } from '../context/TasksContext';
import { useEffect } from 'react';
import TaskCard from './../components/TaskCard';

const TasksPage = () => {

    const { getTasks, tasks } = useTask();

    useEffect(() => {
        getTasks();
    }, [])

    if(tasks.length === 0) return <h1>No tasks</h1>

    return (
        <div className="grid grid-cols-3 gap-2">
                {
                    tasks.map(task => 
                        <TaskCard key={task._id} task={task} />
                    )
                }
        </div>
    )
}

export default TasksPage