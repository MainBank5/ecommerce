
import Home from "./Pages/Home"
import Products from "./components/Products"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  

  return (
    <div className='antialiased'>
      
        <ToastContainer />
        <Home/>
        <Products/>
      
    </div>
  )
}

export default App
