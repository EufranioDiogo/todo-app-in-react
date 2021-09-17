import { useState } from 'react';
import Header from './Header';
import Tasks from './Tasks';
import AddTask from './AddTask';


const MainApp = function() {
    const [showForm, setShowForm] = useState(false);
    const [tasks, setTasks] = useState([
    ]);

    const deleteTask = function (taskId) {
        setTasks(tasks.filter(task => task.id !== taskId));
    }

    const reminderTask = function (taskId) {
        setTasks(
            tasks.map(task => {
                if (task.id === taskId) {
                    task.reminder = !task.reminder;
                }
                return task;
            })
        );
    }

    const addTask = function (task) {
        task.id = Math.floor(Math.random() * 1001);
        setTasks(tasks.concat([task]));
    }

    const toogleForm = function () {
        setShowForm(!showForm);
    }

    return (
        <div className="App">
            <div>
                <Header toogleForm={toogleForm}></Header>
                {
                    showForm &&
                    <AddTask createTask={addTask}></AddTask>
                }
                <Tasks tasks={tasks} deleteTask={deleteTask} toogleReminder={reminderTask}></Tasks>
            </div>
        </div>

    );
}

export default MainApp;
