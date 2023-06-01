import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppContext from "./utils/context";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SuccessfulPayment from "./components/SuccessfulPayment/SuccessfulPayment";
import ReactGA from 'react-ga';


function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("https://server-side-3aru.onrender.com");
        setData(result.data);
        setLoading(false);
      } catch (error) {}
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!loading) {
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, [loading]);

  if (loading) {
    return null;
  }
  
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        closeOnClick={false}
        pauseOnHover={false}
        limit={1}
      />

      <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/category/:id" element={<Category data={data} />} />
          <Route path="/product/:id" element={<SingleProduct data={data} />} />
          <Route path="/success" element={<SuccessfulPayment />} />
        </Routes>
        <Newsletter />
        <Footer />
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
