import { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import Category from "./Category/Category";

const Home = () => {
  
  const { products, setProducts } =
    useContext(Context);

  useEffect(() => {
    getProducts();
    
  }, []);

  
  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      setProducts(res);
      
    });
  };

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
           <Category/>
          <Products products={products} headingText="Available products" />         
        </div>
      </div>
    </div>
  );
};

export default Home;
