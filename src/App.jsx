import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import Projects from "./components/Projects"
import About from "./components/About"

function App() {
  return (
    <div className="dark:bg-gray-800 bg-cover bg-center bg-[url('./bg.png')] dark:bg-[url('#')]">
      <Header/>
      <Dashboard/>
      <Projects/>
      <About/>
    </div>
  )
}

export default App
