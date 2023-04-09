import "./Products.scss";
import Product from "./Product/Product";
import { useState } from "react";

const Products = ({ products, innerPage, headingText }) => {
  const [showMore, setShowMore] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  const handleShowMoreClick = () => {
    setShowMore(true);
    setItemsPerPage(products?.data?.length);
  };

  return (
    <div className="products-container">
      {!innerPage && <div className="heading">{headingText}</div>}
      <div className="products">
        {products?.data
          ?.slice(0, showMore ? products?.data?.length : itemsPerPage)
          .map((item) => (
            <Product key={item.id} id={item.id} data={item.attributes} />
          ))}
      </div>
      {products?.data?.length > 12 && !showMore && (
        <div className="nav-buttons">
          <button className="show-more-btn" onClick={handleShowMoreClick}>
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
