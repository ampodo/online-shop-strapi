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


const Loading = () => (
  <div className="loader">
    Loading... Due to free database tier initial render may take up to 30
    seconds...
  </div>
);

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

    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <Loading />;
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
         
        
        </Routes>
        <Newsletter />
        <Footer />
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
