import { StrictMode } from 'react'
import GlobalStyle from './styles/globalStyles';
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from "./routes/routes"
import { ContextProvider } from './context/ContextProvider';
import { ThemeContextProvider } from './context/ThemeProvider';

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  //<StrictMode>
  <ContextProvider>
    <ThemeContextProvider>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </ContextProvider>
  //</StrictMode>,
);
