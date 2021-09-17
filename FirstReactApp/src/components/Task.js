//import { FaTimes } from 'react-icons';

const Task = ({ task, deleteTask, toogleReminder }) => {
    console.log(deleteTask);

    return (
        <li className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => toogleReminder(task.id)}>
            <h3>
                {task.text}
                <button onClick={() => deleteTask(task.id)}>Delete</button>
            </h3>
            <p>{task.day}</p>
        </li>
    )
}

export default Task;