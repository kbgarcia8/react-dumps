import { StrictMode } from 'react'
import "./index.css"
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from "./routes/routes"
import { ContextProvider } from './context/ContextProvider';

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  //<StrictMode>
  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>
  //</StrictMode>,
);
