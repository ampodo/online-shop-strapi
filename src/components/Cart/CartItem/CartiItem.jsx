import { MdClose } from "react-icons/md";
import "./CartItem.scss";
import { Context } from "../../../utils/context";
import { useContext } from "react";

const CartItem = () => {
  const { cartItems, handleCartProductQuantity, handleRemoveFromCart } =
    useContext(Context);

  const cloudinaryUrl = "https://res.cloudinary.com/devqsoqp4/image/upload/";

  return (
    <div className="cart-products">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-product">
          <div className="img-container">
            <img
              src={
                cloudinaryUrl +
                item.attributes.img.data[0].attributes.url.replace(
                  "https://res.cloudinary.com/devqsoqp4/image/upload/",
                  ""
                )
              }
              alt=""
            />
          </div>

          <div className="prod-details">
            <span className="name">{item.attributes.title}</span>
            <MdClose
              className="close-btn"
              onClick={() => handleRemoveFromCart(item)}
            />
            <div className="quantity-buttons">
              <span onClick={() => handleCartProductQuantity("dec", item)}>
                -
              </span>
              <span>{item.attributes.quantity}</span>
              <span onClick={() => handleCartProductQuantity("inc", item)}>
                +
              </span>
            </div>
            <div className="text">
              <span className="highlight">{item.attributes.quantity}</span>
              <span className="cross">x</span>
              <span className="highlight">
                &#8364;{item.attributes.price * item.attributes.quantity}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
