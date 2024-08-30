import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./app.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import LoginPopUP from "./components/LoginPopUp/LoginPopUP";

export function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopUP setShowLogin={setShowLogin} /> : <></>}
      <div className="">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
