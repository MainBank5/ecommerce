import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Applayout from './Pages/Applayout.tsx'
import Error from './Pages/Error.tsx'
import Accessories from './Pages/Accessories.tsx'
import Watches from './Pages/Watches.tsx'
import Phonecases from './Pages/Phonecases.tsx'
import Phones from './Pages/Phones.tsx'
import Cart from './Pages/cart/Cart.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {store} from './store/store'
import { Provider } from "react-redux"
const router = createBrowserRouter([
  {path:"/", element:<Applayout/>, errorElement: <Error/>, children:[
    {path:"/", element:<App/>},
    {path:"/phones", element:<Phones/>},
    {path:"/phonecases", element:<Phonecases/>},
    {path:"/watches", element:<Watches/>},
    {path:"/accessories", element:<Accessories/>},
    {path:"/cart", element:<Cart/>},
  ]}
])

const queryclient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryclient}>
      <Provider store={store}>
      <RouterProvider router={router}/>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
