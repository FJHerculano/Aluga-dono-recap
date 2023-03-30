import React  from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import App from './App'
import './styles/global.css'

// Router
import {createBrowserRouter, RouterProvider} from "react-router-dom"

// Pages
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import RegisterAdressPage from './pages/RegisterAdressPage'
import RegisterSpecificationsPage from './pages/RegisterSpecificationsPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "login",
        element: <LoginPage/>
      },
      {
        path: "register",
        element: <RegisterPage/>
      },
      {
        path: "register-adress",
        element: <RegisterAdressPage/>
      },
      {
        path: "profile",
        element: <ProfilePage/>
      },
      {
        path: "register-specifications",
        element: <RegisterSpecificationsPage/>
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
