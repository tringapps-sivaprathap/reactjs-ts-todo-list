import { createSlice } from '@reduxjs/toolkit'

type initialStateType =  {
  tasks: {id: string, name: string, status?: boolean, edit?: boolean}[]
}

const initialState: initialStateType = {
  tasks: JSON.parse(localStorage.getItem('tasks') || '[]')
}

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    taskDeleted: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload && task)
    },
    taskCompleted: (state, action) => {
      state.tasks = state.tasks.map((task) => task.id === action.payload ? { ...task, status: !task.status } : { ...task })
    },
    taskEdited: (state, action) => {
      state.tasks = state.tasks.map((task) => task.id === action.payload ? { ...task, edit: !task.edit } : { ...task })
    },
    taskSaved: (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if(task.id === action.payload.oldTask)
          return { ...task, name: action.payload.newTask, edit: !task.edit }
        else
          return { ...task }
      })
    },
    taskAdded: (state, action) => {
      state.tasks = [...state.tasks, {id: action.payload.id, name: action.payload.name}]
    }
  }
})

export default taskSlice.reducer
export const {taskDeleted, taskCompleted, taskEdited, taskSaved, taskAdded} = taskSlice.actions;