import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layout/MainLayout.jsx'
import Home from "./pages/Home.jsx"
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import HeroRegister from './components/HeroRegister/HeroRegister'

const router = createBrowserRouter([
  {
    path:"/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path:"/home",
        element: <Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/heroRegister",
        element: <HeroRegister></HeroRegister>
      }
    ]     
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
