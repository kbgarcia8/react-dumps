import React from "react";
import App from "../App"
import DesignSystem from "../DesignSystem";
import MainLayout from "../components/layout/MainLayout/MainLayout";
import Navbar from "../components/molecules/Navbar/Navbar";
import HomePage from "../components/pages/WebPages/HomePage/HomePage";
import AboutPage from "../components/pages/WebPages/AboutPage/AboutPage";
import TestimonialPage from "../components/pages/WebPages/TestimonialsPage";
import ContactPage from "../components/pages/WebPages/ContactPage";
import SignUpPage from "../components/pages/WebPages/SignUpPage/SignUpPage";
import LoginPage from "../components/pages/WebPages/LoginPage";

const routes = [
  {
    path: "/design",
    element: <DesignSystem />,
   // errorElement: <ErrorPage />, //need to explore more about this
  },
  {
    path: "/",
    element: <MainLayout header={<Navbar/>}/>,
    children: [
      {index: true, element: <HomePage/>}, //Default route of '/' due to index: true
      {path: "about", element: <AboutPage/>},
      {path: "testimonials", element: <TestimonialPage/>},
      {path: "contact", element: <ContactPage/>},
      {path: "signup", element: <SignUpPage/>},
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