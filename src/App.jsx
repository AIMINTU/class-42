
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './component/Home/Home'
import About from './component/about/About'
import Contact from './component/contact/Contact'
import Career from './component/career/Career'
import ContactDetails from './component/contactDetails/ContactDetails'

function App() {
  
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Home></Home>,
      children:[
        {
          path:'/about',
          
          element:<About></About>
        },
        {
          path:'/contact',
          loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
          element:<Contact></Contact>
        },
        {
          path:'/career',
          
          element:<Career></Career>
        },
        {
          path:'/contact/:userId',
          loader:(params)=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
          element:<ContactDetails></ContactDetails>
        }
      ]
    },
    
   
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      
    </div>

    
  )
}

export default App
