import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/Home.tsx';
import Prompter from "./routes/Prompter.tsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/prompt",
    element: <Prompter></Prompter>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
