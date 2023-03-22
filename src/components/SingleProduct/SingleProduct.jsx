import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { useState, useContext } from "react";
import { Context } from "../../utils/context";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaCartPlus } from "react-icons/fa";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { handleAddToCart } = useContext(Context);
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

  const increment = () => {
    if (quantity < 5) {
      setQuantity((prevState) => prevState + 1);
    }
  };
  
  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };
  
  if (!data) return;

  const product = data?.data?.[0]?.attributes;

  const cloudinaryUrl = "https://res.cloudinary.com/devqsoqp4/image/upload/";

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={
                cloudinaryUrl +
                product.img.data[0].attributes.url.replace(
                  "https://res.cloudinary.com/devqsoqp4/image/upload/",
                  ""
                )
              }
              alt=""
            />
          </div>
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="price">{product.price}&#8364;</span>
            <span className="desc">{product.desc}</span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>

              <button
                className="add-to-cart-button"
                onClick={() => {
                  handleAddToCart(data.data[0], quantity);
                  setQuantity(1);
                }}
              >
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>

            <span className="divider" />

            <div className="info-item">
              <span className="text-bold">
                Category:{""}
                <span>{product.categories.data[0].attributes.title}</span>
              </span>

              <span className="text-bold">
                Share:
                <span className="social">
                  <FaFacebookF size={16} />
                  <FaInstagram size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>

        <RelatedProducts
          productId={id}
          categoryId={product.categories.data[0].id}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
