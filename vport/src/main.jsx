import * as React from "react";
import * as ReactDOM from "react-dom/client";

import Root from "./Routes/Root.jsx";
import "./index.css";

import {
  
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./Routes/Home.jsx";
import Resume from "./Routes/Resume.jsx";

import History from "./Routes/History.jsx";
import Contact from "./Routes/Contact.jsx";
import Blog from "./Routes/Blog.jsx";



const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: < Home/>,
      },
            {
        path: "/history",
        element: < History />,
        
      },
      
      {
        path: "/resume",
        element: < Resume />
      },

      {
        path: "/contact",
        element: < Contact />
      },
            {
        path: "/blog",
        element: < Blog />,
      }
    
    ],


  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);