import './App.css'
import {createBrowserRouter, Route, RouterProvider, useLocation, useNavigate} from 'react-router-dom'

import Layout from './component/Layout'
import Home from './component/Home'
import About from './component/About'
import MySkills from './component/MySkills'
import Contact from './component/Contact'


function App() {



 const router = createBrowserRouter([
  {path: "/",
    element : <Layout />,
    children: [
    {
      path: "/", 
      element:<Home />
    }, 
    {
      path: '/about',
      element:<About />
    },
    {
      path: '/myskills',
      element : <MySkills />
    },
    {
    path: '/contact',
    element: <Contact />
    }
    ]
  }
 ]);

 
 


  return <> 
  
  <RouterProvider router={router}/ >
 
    </>
}

export default App
