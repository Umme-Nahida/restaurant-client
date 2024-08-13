import React from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Route/router";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className="">
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  </React.StrictMode>
);
