import "./Cart.scss";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartiItem";
import { useContext } from "react";
import { Context } from "../../utils/context";
import { makePaymentRequest } from "../../utils/api";
import { loadStripe } from "@stripe/stripe-js";

const Cart = ({ setShowCart }) => {
  const { cartItems, cartSubTotal } = useContext(Context);

  const stripePromise = loadStripe(
    `${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makePaymentRequest.post("/api/orders", {
        products: cartItems,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {}
  };

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

        {!cartItems?.length && (
          <div className="empty-cart">
            <BsCartX />
            <span>No products in the cart</span>
            <span className="return-cta" onClick={() => setShowCart(false)}>
              RETURN TO SHOP
            </span>
          </div>
        )}

        {!!cartItems.length && (
          <>
            <CartItem />

            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">SUBTOTAL</span>
                <span className="text-total">&#8364;{cartSubTotal}</span>
              </div>

              <div className="button">
                <button className="checkout" onClick={handlePayment}>
                  CHECK OUT
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
