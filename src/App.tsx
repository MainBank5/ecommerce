import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import Phones from "./Pages/Phones"
import Phonecases from "./Pages/Phonecases"
import Watches from "./Pages/Watches"
import Accessories from "./Pages/Accessories"

function App() {
  

  return (
    <div className='antialiased'>
      
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/phones" element={<Phones/>} />
          <Route path="/phonecases" element={<Phonecases/>} />
          <Route path="/watches" element={<Watches/>} />
          <Route path="/accessories" element={<Accessories/>} />
        </Routes>
      
    </div>
  )
}

export default App
