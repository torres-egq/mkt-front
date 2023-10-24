import React,{useState} from 'react' 
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import { render } from "react-dom";

import {Menu} from './components/menu/index.tsx'


import {Page} from './routes/Page.tsx'
import {Login} from './routes/Login'
import ErrorPage from "./routes/error-page.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
    errorElement: <ErrorPage />,
  },
  {
    // path: "contacts/:contactId",
    path: "contacts",
    element: <>teste</>,
  },
  {
    // path: "contacts/:contactId",
    path: "login",
    element: <Login />,
  },
]);


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//   },
// ]);


// render(<Example />, document.getElementById("root"));
export default function App() {

  return (
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  //  <Menu >

  //  DASHBOARD DE GRAFICOS OU ALGUMA COISA PARA PAGINAN INICIAL
  //  </Menu>
  )
}
