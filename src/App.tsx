import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import {
  About,
  Admin,
  Home,
  Login,
  Menu,
  Profile,
  Services,
  Signup,
} from "./Pages";
import { Cart, Footer, Header } from "./components";
import {
  calculateCartTotal,
  fetchFoodData,
  fetchUserCartData,
  isAdmin,
} from "./utils/functions";
import { useStateValue } from "./context/StateProvider";
import Contact from "./components/Contact";

function App() {
  const [
    { showCart, showContactForm, user, foodItems, cartItems, adminMode },
    dispatch,
  ] = useStateValue();

  useEffect(() => {
    fetchFoodData(dispatch);
    user && fetchUserCartData(dispatch);
  }, []);

  useEffect(() => {
    foodItems &&
      cartItems.length > 0 &&
      calculateCartTotal(cartItems, foodItems, dispatch);
  }, [cartItems, foodItems, dispatch]);

  return (
    <AnimatePresence exitBeforeEnter>
      <ToastContainer />
      <div className="w-screen h-auto min-h-[100vh] flex flex-col bg-primary">
        {showCart && <Cart />}
        {showContactForm && <Contact />}
        {!(adminMode && isAdmin()) && <Header />}
        <main
          className={`${
            !(adminMode && isAdmin()) &&
            "mt-16 md:mt-16 px-3 md:px-8 md:py-6 py-4"
          } w-full h-auto`}
        >
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/services" element={<Services />} />
          </Routes>
          {!(adminMode && isAdmin()) && <Footer />}
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
