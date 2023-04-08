import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import "@availity/block-ui/dist/index.css";
import { MainProvider } from "./store/context/MainContext.jsx";
import App from "./App";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </MainProvider>
    </BrowserRouter>
  </React.StrictMode>
);
