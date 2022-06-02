import { useState } from "react"
import { useAppDispatch } from '../app/hook'
import {taskAdded} from '../features/taskSlice'
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
  const [newTask, setNewTask] = useState('')
  const dispatch = useAppDispatch();

  return (
    <div className='add-task-container'>
      <input
        type='text'
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      <button
        onClick={() => {
          if(newTask.trim() === '' || newTask.trim() === ' ')
            alert("task can't be empty")
          else
            dispatch(taskAdded({id: uuidv4(), name: newTask.trim()}))
          
          setNewTask('')
        }}
      >
        Add Task
      </button>
    </div>
  )
}

export default AddTask