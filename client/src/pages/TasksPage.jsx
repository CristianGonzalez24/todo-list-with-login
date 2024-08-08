import { useTask } from '../context/TasksContext';
import { useEffect } from 'react';

const TasksPage = () => {

    const { getTasks, tasks } = useTask();

    useEffect(() => {
        getTasks();
    }, [])

    if(tasks.length === 0) return <h1>No tasks</h1>

    return (
        <div>
            <h1>Tasks</h1>
                {
                    tasks.map(task => 
                        <div key={task._id}>
                        <h1>{task.title}</h1>
                        <p>{task.description}</p>
                        </div>
                    )
                }
        </div>
    )
}

export default TasksPage