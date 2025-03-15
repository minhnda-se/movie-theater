import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../layouts/Header";
import PageNotFound from "../layouts/PageNotFound";
import Footer from "../layouts/Footer/Footer";
import Home from "../pages/Home";
import Checkout from "../pages/Checkout";
const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Checkout></Checkout>
      <Footer />
    </BrowserRouter>
  );
};

export default MainRoutes;
