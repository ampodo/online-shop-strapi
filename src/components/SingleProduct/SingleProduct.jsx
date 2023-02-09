import "./SingleProduct.scss";
import prod from "../../assets/products/miracle1.png";
import RelatedProducts from "./RelatedProducts/RelatedProducts";

import { FaFacebookF, FaInstagram, FaCartPlus } from "react-icons/fa";

const SingleProduct = () => {
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={prod} alt="" />
          </div>
          <div className="right">
            <span className="name">Product name</span>
            <span className="price">Price</span>
            <span className="desc">Product description</span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span>-</span>
                <span>3</span>
                <span>+</span>
              </div>

              <button className="add-to-cart-button">
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>

            <span className="divider" />

            <div className="info-item">
              <span className="text-bold">
                Category:
                <span>Men</span>
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

        <RelatedProducts/>

      </div>
    </div>
  );
};

export default SingleProduct;
