import { useDispatch } from 'react-redux'
import {taskAdded} from '../features/taskSlice'
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
  const [newTask, setNewTask] = useState('')
  const dispatch = useDispatch();

  return (
    <div className='add-task-container'>
      <input type='text' value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button onClick={() => {
        if(newTask.trim() === '' || newTask.trim() === ' ')
          alert("task can't be empty")
        else
          dispatch(taskAdded({id: uuidv4(), name: newTask}))
        setNewTask('')
      }}>Add Task</button>
    </div>
  )
}

export default AddTask