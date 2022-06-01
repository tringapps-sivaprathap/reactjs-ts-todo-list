import { useSelector } from 'react-redux'
import Task from "./Task";

type tasksType = {id: string, name: string, status?: boolean, edit?: boolean}[]
type stateType = {
  task: {tasks: tasksType},
  tasks: tasksType
}

const Tasks = () => {
  const tasks = useSelector((state: stateType) => state.task.tasks)
  const completeCount = () => {
    let count: number = 0
    tasks.forEach((task) => task.status === true && count++)
    return count
  }

  return (
    <>
      {tasks.length === 0 ? <div className='no-task'><p>Add your first task</p></div> : (
        <>
          <div className='tasks-container'>
            {tasks.map((task) => {
              return (
                <div className='task-container' key={task.id}>
                  <Task task={task} />
                </div>
              )
            })}
          </div>

          <div className='count-container'>
            <p>Done: {completeCount()}</p>
          </div>
        </>
      )}
    </>
  )
}

export default Tasks