
import Home from "./Pages/Home"
import Products from "./components/Products"
import {store} from './store/store'
import { Provider } from "react-redux"

function App() {
  

  return (
    <div className='antialiased'>
      <Provider store={store}>
        <Home/>
        <Products/>
      </Provider>
      
    </div>
  )
}

export default App
