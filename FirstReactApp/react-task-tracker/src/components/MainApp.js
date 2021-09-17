import { useState } from 'react';
import Header from './Header';
import Tasks from './Tasks';
import AddTask from './AddTask';


const MainApp = function() {
    const [showForm, setShowForm] = useState(false);
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Something',
            day: 'Out 9 at 20:00pm',
            reminder: false
        },
        {
            id: 2,
            text: 'Something2',
            day: 'Out 10 at 22:00pm',
            reminder: false
        },
        {
            id: 3,
            text: 'Something3',
            day: 'Out 12 at 80:00pm',
            reminder: true
        }
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
        task.id = tasks.length + 1;
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
