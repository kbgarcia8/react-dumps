import { StrictMode } from 'react'
import GlobalStyle from './styles/globalStyles';
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from "./routes/routes"
import { GlobalContextProvider } from './context/GlobalContext';
import { ThemeContextProvider } from './context/ThemeContext';
import { UserAuthContextProvider } from './context/UserAuthContext';

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <GlobalContextProvider>
    <ThemeContextProvider>
      <UserAuthContextProvider>
        <GlobalStyle />
        <RouterProvider router={router} />
      </UserAuthContextProvider>
    </ThemeContextProvider>
  </GlobalContextProvider>
  </StrictMode>,
);
