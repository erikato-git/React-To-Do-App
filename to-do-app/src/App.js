import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import {useState, useEffect} from 'react';
import AddTask from './components/AddTask';


function App() {
  // Todo: how to change state of an array in react

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Doctor Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
      },
      {
        id: 2,
        text: "Meeting at School",
        day: "Feb 6th at 1:30pm",
        reminder: true,
      },
      {
        id: 3,
        text: "Food Shopping",
        day: "Feb 5th at 2:30pm",
        reminder: true,
      }
    ]
  )

  useEffect(() => {
    const getTasks = async() => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    console.log("useEffet()")
    
    getTasks()
  }, [])

  
  //********************************//
  //Kunne ikke få JSON-serveren til at virke
  //Nåede til sidste del af Brad Traversy's
  //React-tutorial
  //********************************//

  const fetchTasks = async() => {
    const res = await fetch(`http://localhost:3000/tasks`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()

    console.log(data)
    return data
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }





  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    // console.log(id)
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {/* onDelete går igennem to Componenter: Tasks -> Task */}
      {showAddTask && < AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? ( 
        <Tasks tasks={tasks} onDelete={deleteTask}/>
       ) : (
         'No tasks to show'
       )}
    </div>
  );
}

export default App;





