import React from "react";
import "./Category.scss";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();

  const handleImageClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <div className="category-shop">
      <div className="categories">
        <div className="category">
          <img
            src="https://res.cloudinary.com/devqsoqp4/image/upload/v1678393173/derm1_e81f0878b4.png"
            alt=""
            onClick={() => handleImageClick(1)}
          />
        </div>
        <div className="category">
          <img
            src="https://res.cloudinary.com/devqsoqp4/image/upload/v1678393173/hydra2_e5c1465c64.png"
            alt=""
            onClick={() => handleImageClick(2)}
          />
        </div>
        <div className="category">
          <img
            src="https://res.cloudinary.com/devqsoqp4/image/upload/v1678393173/men3_0e9a2a2780.png"
            alt=""
            onClick={() => handleImageClick(3)}
          />
        </div>
        <div className="category">
          <img
            src="https://res.cloudinary.com/devqsoqp4/image/upload/v1678393173/sevemiracle_5f4f2c6f6e.png"
            alt=""
            onClick={() => handleImageClick(4)}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
