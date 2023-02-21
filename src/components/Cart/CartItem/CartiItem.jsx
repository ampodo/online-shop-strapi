import { MdClose } from "react-icons/md";
import "./CartItem.scss";
import prod from "../../../assets/products/miracle1.png";

const CartItem = () => {
  return (
    <div className="cart-products">
      <div className="cart-product">
        <div className="img-container">
          <img src={prod} alt="" />
        </div>

        <div className="prod-details">
          <span className="name">product name</span>
          <MdClose className="close-btn" />
          <div className="quantity-buttons">
            <span>-</span>
            <span>3</span>
            <span>+</span>
          </div>
          <div className="text">
            <span className="highlight">3</span>
            <span>x</span>
            <span className="highlight">&#8364;45</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
