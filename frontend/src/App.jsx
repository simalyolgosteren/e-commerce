import React from "react";
import HomePage from "./pages/HomePage";
import "./App.css";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";
import AuthPage from "./pages/AuthPages";
import CartPage from "./pages/CartPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <Routes>
     <Route path= '/' element={<HomePage/>} />
     <Route path="/shop" element={<ShopPage/>} />
     <Route path="/blog" element={<BlogPage/>} />
     <Route path="/contact" element={<ContactPage/>} />
     <Route path="/cart" element={<CartPage/>} />
     <Route path="/auth" element={<AuthPage/>} />
     <Route path="/cart" element={<CartPage/>} />
     <Route path="/product/:id" element={<ProductDetailsPage/>} />
     <Route path="/blog/:id" element={<BlogDetailsPage />} />
    </Routes>
  );
}
export default App;
