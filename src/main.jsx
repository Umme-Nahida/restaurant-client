import React from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Route/router";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Authentication/AuthProvider";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <HelmetProvider>
      <div className="">
        <RouterProvider router={router} />
      </div>
      <Toaster/>
    </HelmetProvider>
    </AuthProvider>
    
  </React.StrictMode>
);
