import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />} />
),{ basename: '/hello-storybook-ci-test' })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
