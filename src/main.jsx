import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Liste from "./components/Liste"
import Parameters from "./components/Parameters"

const router = createBrowserRouter([
  {
    path: "/", element: <App/>,
    children: [
      {path: "/", element: <Liste/>},
      {path: "/parameters", element: <Parameters/>},
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
