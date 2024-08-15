import React from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Route/router";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Authentication/AuthProvider";
import { Toaster } from "react-hot-toast";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <div className="">
            <RouterProvider router={router} />
          </div>
          <Toaster />
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
