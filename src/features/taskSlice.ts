import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState =  {
  tasks: {
    id: string,
    name: string, 
    status?: boolean, 
    edit?: boolean
  }[]
}

const initialState: InitialState = {
  tasks: JSON.parse(localStorage.getItem('tasks') || '[]')
}

const taskSlice = createSlice({
  name: 'task',

  initialState,
  
  reducers: {
    taskDeleted: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload && task)
    },

    taskCompleted: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.map((task) => {
        if(task.id === action.payload) 
          return { ...task, status: !task.status }
        else
          return { ...task }
      })
    },

    taskEdited: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.map((task) => {
        if(task.id === action.payload)
          return { ...task, edit: !task.edit }
        else
          return { ...task }
      })
    },

    taskSaved: (state, action: PayloadAction<{oldTask: string, newTask: string}>) => {
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