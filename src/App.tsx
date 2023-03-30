import './styles/global.css'

import { Outlet } from 'react-router-dom'
// import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Outlet />
    </div>
  )
}

export default App
