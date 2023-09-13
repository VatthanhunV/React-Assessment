import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home.jsx'
import AdminPage from './AdminPage.jsx'
import UserPage from './UserPage.jsx'
import OwnerPage from './OwnerPoge.jsx'

const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/user', element: <UserPage />},
  {path: '/admin', element: <AdminPage />},
  {path: '/owner', element: <OwnerPage />},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
