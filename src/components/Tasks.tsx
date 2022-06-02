import { useEffect } from 'react';
import { useAppSelector } from '../app/hook'
import Task from "./Task";

const Tasks = () => {
  const tasks = useAppSelector((state) => state.task.tasks)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const completeCount = (): number => {
    let count: number = 0
    tasks.forEach((task) => task.status === true && count++)
    return count
  }

  return (
    <>
      {tasks.length === 0 ? <div className='no-task'><p>Add your first task</p></div>
      : (
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