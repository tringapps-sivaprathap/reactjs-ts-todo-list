import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import { useEffect } from "react"
import { useSelector } from 'react-redux'

type tasksType = {id: string, name: string, status?: boolean, edit?: boolean}[]
type stateType = {
  task: {tasks: tasksType},
  tasks: tasksType
}
const App = () => {
  const tasks = useSelector((state: stateType) => state.task.tasks)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <>
    <div className="header"><h1>Keep Track of Your Tasks</h1></div>
    <AddTask />
      <Tasks />
    </>
  )
}

export default App