import { StrictMode } from 'react'
import GlobalStyle from './styles/globalStyles';
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from "./routes/routes"
import { GlobalContextProvider } from './context/GlobalContext';
import { ThemeContextProvider } from './context/ThemeContext';
import { UserAuthContextProvider } from './context/UserAuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <GlobalContextProvider>
    <ThemeContextProvider>
      <UserAuthContextProvider>
        <GlobalStyle />
        <RouterProvider router={router} />
        <ToastContainer 
          position="top-right" 
          autoClose={5000} 
          hideProgressBar={false} 
          newestOnTop={true} 
          closeOnClick 
          pauseOnFocusLoss
          draggable 
          pauseOnHover
      />
      </UserAuthContextProvider>
    </ThemeContextProvider>
  </GlobalContextProvider>
  </StrictMode>,
);
