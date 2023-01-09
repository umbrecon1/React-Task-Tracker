import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    text: 'Breakfast',
    time: '7 a.m.',
    reminder: true,
  },
  {
    id: 2,
    text: 'Second Breakfast',
    time: '9 a.m.',
    reminder: true,
  },
  {
    id: 3,
    text: 'Elevenses',
    time: '11 a.m.',
    reminder: true,
  },
  {
  id: 4,
    text: 'Luncheon',
    time: '1 p.m.',
    reminder: true,
  },
  {
    id: 5,
    text: 'Afternoon Tea',
    time: '3 p.m.',
    reminder: true,
  },
  {
    id: 6,
    text: 'Dinner',
    time: '6 p.m.',
    reminder: true,
  },
  {
    id: 7,
    text: 'Supper',
    time: '9 p.m.',
    reminder: true,
  },
  
  

  ])
  // Delete Task //
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))

  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id ===id ? {...task, reminder: ! task.reminder} : task))
  }

  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks'}
    </div>
  );
}



export default App;
