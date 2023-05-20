import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Preloader } from "./Preloader";
import "./Product.scss";

const Product = ({ data, id }) => {
  const navigate = useNavigate();
  const cloudinaryUrl = "https://res.cloudinary.com/devqsoqp4/image/upload/";

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = 400;
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [data]);

  if (isLoading) {
    return <Preloader />;
  }
   
  return (
    <div className="product-card" onClick={() => navigate(`/product/${id}`)}>
      <div className="thumbnail">
        <img
          src={
            cloudinaryUrl +
            data.img.data[0].attributes.url.replace(
              "https://res.cloudinary.com/devqsoqp4/image/upload/",
              ""
            )
          }
          alt=""
        />
      </div>
      <div className="prod-details">
        <span className="name">{data.title}</span>
        <span className="name">&#8364;{data.price}</span>
      </div>
    </div>
  );
};

export default Product;
