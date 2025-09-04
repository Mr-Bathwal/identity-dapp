import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { Providers } from './wagmi'
import App from './App'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Wizard from './pages/Wizard'
import Admin from './pages/Admin'
import Settings from './pages/Settings'
import Organizations from './pages/admin/Organizations'
import Certificates from './pages/admin/Certificates'
import Recognitions from './pages/admin/Recognitions'
import CrossChain from './pages/admin/CrossChain'
import Logs from './pages/admin/Logs'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'status', element: <Dashboard /> },
      { path: 'wizard', element: <Wizard /> },
      { path: 'admin', element: <Admin /> },
      { path: 'admin/organizations', element: <Organizations /> },
      { path: 'admin/certificates', element: <Certificates /> },
      { path: 'admin/recognitions', element: <Recognitions /> },
      { path: 'admin/cross-chain', element: <CrossChain /> },
      { path: 'admin/logs', element: <Logs /> },
      { path: 'settings', element: <Settings /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </React.StrictMode>
)

