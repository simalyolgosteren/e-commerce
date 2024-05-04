import React from "react";
import HomePage from "./pages/HomePage";
import "./App.css";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";
import AuthPage from "./pages/AuthPages";
import CardPage from "./pages/CardPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";


function App() {
  return (
    <React.Fragment>
      <HomePage /> 
       {/* <ShopPage />  */}
       {/* <ContactPage />  */}
       {/* <AuthPage />  */}
       <CardPage /> 
       {/* <BlogPage />  */}
       {/* <BlogDetailsPage /> */}
      {/* <ProductDetailsPage /> */}
    </React.Fragment>
  );
}
export default App;
