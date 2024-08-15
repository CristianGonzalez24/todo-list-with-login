import { useForm} from 'react-hook-form';
import { useTask } from './../context/TasksContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

const TaskFormPage = () => {

    const { register, handleSubmit, setValue } = useForm();
    const { createTask, getTask, updateTask } = useTask();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        async function loadTask() {
            if(params.id) {
                const task = await getTask(params.id);
                setValue('title', task.title);
                setValue('description', task.description);
                setValue('date', dayjs(task.date).utc().format("YYYY-MM-DD"));
            }
        }

        loadTask();
    }, [])

    const onSubmit = handleSubmit(data => {
        if(params.id) {
            updateTask(params.id, {
                ...data,
                date: dayjs(data.date).utc().format()
            });
        } else {
            createTask({
                ...data,
                date: dayjs(data.date).utc().format()
            });
        }
        navigate('/tasks');
    })
    return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
        <div className="bg-zinc-800 max-w-md mx-auto p-10 rounded-md">
            <form onSubmit={onSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" placeholder="Title" {...register('title')} autoFocus  className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"/>
        
                <label htmlFor="description">Description</label>
                <textarea rows="5" placeholder="Description" {...register('description')} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"/>
        
                <label htmlFor="date">Date</label>
                <input type="date" {...register('date')} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" required/>
        
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Save</button>
            </form>
        </div>
    </div>
    )
}

export default TaskFormPage