import { useEffect, useContext } from "react";
import "./Home.scss";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import Category from "./Category/Category";
import Slider  from "./Slider/Slider";


const Home = () => {
  const { products, setProducts } = useContext(Context);

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
     <Slider />
      <div className="main-content">
        <div className="layout">
          <Category />
          <Products products={products} headingText="Available products" />
        </div>
      </div>
    </div>
  );
};

export default Home;
