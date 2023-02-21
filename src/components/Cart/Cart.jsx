import "./Cart.scss";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartiItem";

const Cart = ({ setShowCart }) => {
  return (
    <div className="cart-panel">
      <div className="layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Product cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">close</span>
          </span>
        </div>

        {/* <div className="empty-cart">
          <BsCartX />
          <span>No products in the cart</span>
          <button className="return-cta">RETURN TO SHOP</button>
         </div> */}

        <>
          <CartItem />

          <div className="cart-footer">
            <div className="subtotal">
              <span className="text">SUBTOTAL</span>
              <span className="text-total">&#8364;135</span>
            </div>

            <div className="button">
              <button className="checkout">CHECK OUT</button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Cart;
