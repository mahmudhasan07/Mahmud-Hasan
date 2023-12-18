import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Banner from './Components/Banner/Banner.jsx';
import Skills from './Components/Skills/Skills.jsx';
import Home from './Components/Home/Home.jsx';
import ProjectInfo from './Components/Projects/ProjectInfo.jsx';

const router = createBrowserRouter([
  {
    path : '/',
    element : <App></App>,
    children :[
      {
        path :'/',
        element: <Home></Home>
      },
      {
        path : '/project/:id',
        element : <ProjectInfo></ProjectInfo>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
