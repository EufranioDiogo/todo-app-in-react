import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
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
    setTasks(tasks.filter(task => task.id != taskId));
  }

  const reminderTask = function (taskId) {
    setTasks(
      tasks.map(task => {
        if (task.id == taskId) {
          task.reminder = !task.reminder;
        }
        return task;
      })
    );
  }

  return (
    <div className="App">
      <Header></Header>
      <AddTask></AddTask>
      <Tasks tasks={tasks} deleteTask={deleteTask} toogleReminder={reminderTask}></Tasks>
    </div>
  );
}

export default App;
