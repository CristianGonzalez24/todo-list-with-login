import { useForm } from 'react-hook-form';
import { useTask } from './../context/TasksContext';

const TaskFormPage = () => {

    const { register, handleSubmit } = useForm();
    const { createTask } = useTask();

    const onSubmit = handleSubmit(data => createTask(data));
    return (
    <div className="bg-zinc-800 max-w-md mx-auto p-10 rounded-md">
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Title" {...register('title')} autoFocus  className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-1"/>
            <textarea rows="5" placeholder="Description" {...register('description')} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-1"/>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Save</button>
        </form>
    </div>
    )
}

export default TaskFormPage