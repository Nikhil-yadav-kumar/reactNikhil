import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider, createBrowserRouter,  } from 'react-router-dom'
import Layout from './Layout.jsx'


import Home from './components/Home/Home.jsx';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import User from './components/User/User'
import Github from './components/Github/Github.jsx'

const router =createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children :[
      {
        path:"",
        element :<Home />
      },
      {
        path:"Contact",
        element: <Contact />
      },
      {
        path:"about",
        element:<About />
      },
      {
        path:"user/:userid",
        element:<User />
      },
      {
        path:"Github",
        element:<Github />
      }
    ]
  }
]);

// const router =createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route Path="" element={<Home />} />
//       <Route Path="/about" element={<About />} />
//       <Route Path="/Contact" element={<Contact />} />

//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
