import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import Projects from "./components/Projects"
import About from "./components/About"

function App() {
  return (
    <div className="dark:bg-gray-800">
      <Header/>
      <Dashboard/>
      <Projects/>
      <About/>
    </div>
  )
}

export default App
