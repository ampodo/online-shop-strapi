import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";



export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState([0]);
  const [cartSubTotal, setCartSubTotal] = useState([0]);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    let count = 0;
    cartItems?.map((item) => (count += item.attributes.quantity));
    setCartCount(count);

    let subTotal = 0;
    cartItems.map(
      (item) => (subTotal += item.attributes.price * item.attributes.quantity)
    );
    setCartSubTotal(subTotal);
  }, [cartItems]);

  const handleAddToCart = (product, quantity) => {
    const items = [...cartItems];
    const index = items.findIndex((p) => p.id === product.id);
  
    if (index !== -1) {
      const updatedQuantity = items[index].attributes.quantity + quantity;
      if (updatedQuantity <= 5) {
        items[index].attributes.quantity = updatedQuantity;
      } else {
        items[index].attributes.quantity = 5;
        toast.error("You can add a maximum of five products of a single item to your cart");
      }
    } else {
      product.attributes.quantity = Math.min(quantity, 5);
      items.push(product);
    }
  
    setCartItems(items);
  };

  const handleRemoveFromCart = (product) => {
    let items = [...cartItems];
    items = items.filter((p) => p.id !== product.id);
    setCartItems(items);
  };

  const handleCartProductQuantity = (type, product) => {
    const index = cartItems.findIndex((item) => item.id === product.id);
    let newCartItems = [...cartItems];
  
    if (type === "inc" && cartItems[index].attributes.quantity < 5) {
      newCartItems[index].attributes.quantity += 1;
    } else if (type === "dec" && cartItems[index].attributes.quantity > 1) {
      newCartItems[index].attributes.quantity -= 1;
    }
  
    setCartItems(newCartItems);
  };

  return (
    <Context.Provider
      value={{
        categories,
        setCategories,
        products,
        setProducts,
        cartItems,
        setCartItems,
        cartCount,
        setCartCount,
        cartSubTotal,
        setCartSubTotal,
        handleAddToCart,
        handleRemoveFromCart,
        handleCartProductQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
