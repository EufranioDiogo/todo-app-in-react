import Task from "./Task";


const Tasks = function ({ tasks, deleteTask, toogleReminder }) {
    return (
        <div>
        {  tasks.length > 0 &&
            <ul>
                {
                    tasks.map(task => (
                        <Task key={task.id} task={task} deleteTask={deleteTask} toogleReminder={toogleReminder} />
                    ))
                }
            </ul>
        }
        { tasks.length === 0 &&
            <p>No task in list</p>
        }
            
        </div>
    )
}

export default Tasks;