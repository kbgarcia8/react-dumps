import React from "react";
import App from "../App"
import DesignSystem from "../DesignSystem.jsx";
import MainLayout from "../components/layout/MainLayout/index.js";
import MainHeader from "../components/organisms/MainHeader/index.js";
import Footer from "../components/organisms/Footer/index.js";
import HomePage from "../components/pages/WebPages/HomePage/index.js";
import TestimonialPage from "../components/pages/WebPages/TestimonialsPage/index.js";
import ContactPage from "../components/pages/WebPages/ContactPage/index.js";
import SignUpPage from "../components/pages/WebPages/SignUpPage/index.js";
import LoginPage from "../components/pages/WebPages/LoginPage/index.js";

import DashboardLayout from "../components/layout/DashboardLayout/index.js";
import DashboardHeader from "../components/organisms/DashboardHeader/index.js";
import Sidebar from "../components/organisms/Sidebar/index.js";
import DashboardHomepage from "../components/pages/WebPages/DashboardHomePage/index.js";
import MenuPage from "../components/pages/WebPages/MenuPage/index.js";
import CartPage from "../components/pages/WebPages/CartPage/index.js";
import OrderHistoryPage from "../components/pages/WebPages/OrderHistoryPage/index.js";
import PendingPage from "../components/pages/WebPages/PendingPage/index.js";
import SettingsPage from "../components/pages/WebPages/SettingsPage/index.js";

const routes = [
  {
    path: "/design",
    element: <DesignSystem />,
   // errorElement: <ErrorPage />, //need to explore more about this
  },
  {
    path: "/",
    element: <MainLayout header={<MainHeader/>} footer={<Footer/>}/>,
    children: [
      {index: true, element: <HomePage/>}, //Default route of '/' due to index: true
      {path: "about", element: <AboutPage/>},
      {path: "testimonials", element: <TestimonialPage/>},
      {path: "contact", element: <ContactPage/>},
      {path: "signup", element: <SignUpPage/>},
      {path: "login", element: <LoginPage/>}
    ]
  },
  {
    path: "/dashboard/",
    element: <DashboardLayout header={<DashboardHeader/>} sidebar={<Sidebar/>}/>,
    children: [
      {index: true, element: <DashboardHomepage/>}, //Default route of '/' due to index: true
      {path: "menu", element: <MenuPage/>},
      {path: "cart", element: <CartPage/>},
      {path: "orders", element: <OrderHistoryPage/>},
      {path: "pending", element: <PendingPage/>},
      {path: "settings", element: <SettingsPage/>},
      {path: "login", element: <LoginPage/>}
    ]
  }
  /*{
    path: "profile/:name", 
    // All :<variable> are dynamic segments and can be accessed via useParams hook in the element component
    // The purpose is to utilize the dynamic segment for conditional segment
    element: <Profile />,
  },
  {
    path: "error",
    element: <ErrorPage />,
  },*/
];

export default routes;