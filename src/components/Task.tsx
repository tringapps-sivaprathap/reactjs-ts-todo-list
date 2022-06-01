import { useDispatch } from 'react-redux'
import { taskDeleted, taskCompleted, taskEdited, taskSaved } from '../features/taskSlice'
import { useState } from "react"

const Task = ({ task }) => {
  const [editedTask, setEditedTask] = useState(task.name)
  const dispatch = useDispatch()

  return (
    <>
      <input
        type='checkbox' onChange={() => dispatch(taskCompleted(task.id))}
        checked={task.status === true ? true : false}
        disabled={task.edit === true ? true : false}
      />
      {task.edit ? (
        <input type='text'
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
        />
      ) :
      (<span className={task.status === true ? 'completed-task' : undefined}>{task.name}</span>)}

      <button
        onClick={() => dispatch(taskDeleted(task.id))}
        className={task.status || task.edit ? 'disabled-button' : 'delete-button'}
        disabled={task.status || task.edit === true ? true : false}
      >Delete</button>

      {task.edit ? (
        <button
          onClick={() => dispatch(taskSaved({oldTask: task.id, newTask: editedTask}))}
          className={task.status === true ? 'disabled-button' : 'save-button'}
          disabled={task.status === true ? true : false}
        >Save</button>
      ) :
      (
        <button
          onClick={() => dispatch(taskEdited(task.id))}
          className={task.status === true ? 'disabled-button' : 'edit-button'}
          disabled={task.status === true ? true : false}
        >Edit</button>
      )}
    </>
  )
}

export default Task