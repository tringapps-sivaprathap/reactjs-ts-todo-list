import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

const App = () => {
  return (
    <>
      <div className="header">
        <h1>Keep Track of Your Tasks</h1>
      </div>
      <AddTask />
      <Tasks />
    </>
  )
}

export default App