import React from "react";
import App from "../App"
import DesignSystem from "../DesignSystem";
import MainLayout from "../components/layout/MainLayout/MainLayout";
import MainHeader from "../components/organisms/MainHeader";
import Footer from "../components/organisms/Footer";
import HomePage from "../components/pages/WebPages/HomePage/HomePage";
import AboutPage from "../components/pages/WebPages/AboutPage/AboutPage";
import TestimonialPage from "../components/pages/WebPages/TestimonialsPage";
import ContactPage from "../components/pages/WebPages/ContactPage";
import SignUpPage from "../components/pages/WebPages/SignUpPage/SignUpPage";
import LoginPage from "../components/pages/WebPages/LoginPage";

import DashboardLayout from "../components/layout/DashboardLayout/DashboardLayout";
import DashboardHeader from "../components/organisms/DashboardHeader";
import Sidebar from "../components/organisms/Sidebar";
import DashboardHomepage from "../components/pages/WebPages/DashboardHomePage";
import MenuPage from "../components/pages/WebPages/MenuPage";
import CartPage from "../components/pages/WebPages/CartPage/CartPage";
import OrdersPage from "../components/pages/WebPages/OrdersPage/OrdersPage";
import PendingPage from "../components/pages/WebPages/PendingPage/PendingPage";
import SettingsPage from "../components/pages/WebPages/SettingsPage/SettingsPage";

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
      {path: "orders", element: <OrdersPage/>},
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