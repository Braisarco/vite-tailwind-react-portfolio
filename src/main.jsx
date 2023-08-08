import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Blog from './components/Blog.jsx'
import Forecast from './components/Forecast.jsx'
import AboutMe from './components/AboutMe.jsx'
import Index from './components/Index.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Index/>
      },
      {
        path:'/aboutme',
        element:<AboutMe/>
      },
      {
        path:'/blog',
        element:<Blog/>
      },
      {
        path:'/forecast',
        element:<Forecast/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
