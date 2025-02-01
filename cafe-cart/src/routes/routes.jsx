import React from "react";
import App from "../App"
import DesignSystem from "../DesignSystem";

const routes = [
  {
    path: "/design",
    element: <DesignSystem />,
   // errorElement: <ErrorPage />, //need to explore more about this
  },
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