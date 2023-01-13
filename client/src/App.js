import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import AddProductPage from "./pages/AddProductPage";
import AccountPage from "./pages/AccountPage";
import ProductPage from "./pages/ProductPage";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/new-products" element={<AddProductPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
