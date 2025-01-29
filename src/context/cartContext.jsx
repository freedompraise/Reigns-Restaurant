import { createContext, useContext, useReducer, useEffect } from "react";
import { toast } from "react-toastify";
import { MdShoppingBasket } from "react-icons/md";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (state.cartItems.some((item) => item.fid === action.payload.fid)) {
        toast.error("Item already in cart", {
          icon: <MdShoppingBasket className="text-2xl text-cartNumBg" />,
          toastId: "itemAlreadyInCart",
        });
        return state;
      }
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    case "UPDATE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.fid === action.payload.fid
            ? { ...item, qty: item.qty + action.payload.qty }
            : item
        ),
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.fid !== action.payload
        ),
      };

    case "EMPTY_CART":
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  return (
    <CartContext.Provider value={{ cartItems: state.cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
