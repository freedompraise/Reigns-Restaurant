import exp from "constants";
import { FoodItem, cartItem } from "../../types";
import { supabase } from "./supabaseClient";
import { MdShoppingBasket } from "react-icons/md";
import { toast } from "react-toastify";

// Cart Functions
export const addToCart = (
  cartItems: cartItem[],
  foodItems: FoodItem[],
  fid: number,
  dispatch: any
) => {
  if (cartItems.some((item: cartItem) => item.fid === fid)) {
    toast.error("Item already in cart", {
      icon: <MdShoppingBasket className="text-2xl text-cartNumBg" />,
      toastId: "itemAlreadyInCart",
    });
  } else {
    const data: cartItem = {
      id: Date.now(),
      fid: fid,
      uid: "some-unique-user-id",
      qty: 1,
    };
    const newCartItems = [...cartItems, data];
    dispatch({ type: "SET_CARTITEMS", cartItems: newCartItems });
    localStorage.setItem(`cart`, JSON.stringify(newCartItems));
    calculateCartTotal(newCartItems, foodItems, dispatch);
  }
};

export const fetchUserCartData = (dispatch: any) => {
  const userCart = JSON.parse(localStorage.getItem(`cart`) || "[]");
  dispatch({ type: "SET_CARTITEMS", cartItems: userCart });
};

export const updateCartItemQty = (
  cartItems: cartItem[],
  foodItems: FoodItem[],
  item: cartItem,
  dispatch: any,
  val: number
) => {
  const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
  if (index !== -1) {
    const newCartItems = [...cartItems];
    newCartItems[index].qty += val;
    dispatch({ type: "SET_CARTITEMS", cartItems: newCartItems });
    localStorage.setItem(`cart`, JSON.stringify(newCartItems));
    calculateCartTotal(newCartItems, foodItems, dispatch);
  }
};

export const deleteCartItem = (
  cartItems: cartItem[],
  foodItems: FoodItem[],
  item: cartItem,
  dispatch: any
) => {
  const newCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
  dispatch({ type: "SET_CARTITEMS", cartItems: newCartItems });
  localStorage.setItem(`cart`, JSON.stringify(newCartItems));
  calculateCartTotal(newCartItems, foodItems, dispatch);
};

export const emptyCart = (dispatch: any) => {
  dispatch({ type: "SET_CARTITEMS", cartItems: [] });
  localStorage.setItem(`cart`, "[]");
  dispatch({ type: "SET_CART_TOTAL", cartTotal: 0 });
};

// Food Data Functions
export const fetchFoodData = async (dispatch: any) => {
  try {
    const { data, error } = await supabase.from("Food").select("*");
    if (!error) {
      dispatch({ type: "SET_FOOD_ITEMS", foodItems: data });
    }
  } catch (e) {
    console.log(e);
  }
};

// Other Functions
export const calculateCartTotal = (
  cartItems: cartItem[],
  foodItems: FoodItem[],
  dispatch: any
) => {
  const total = cartItems.reduce((sum, item) => {
    const foodItem = foodItems.find((food) => food.id === item.fid);
    return sum + (Number(foodItem?.price) || 0) * item.qty;
  }, 0);
  dispatch({ type: "SET_CART_TOTAL", cartTotal: Number(total.toFixed(2)) });
};

export const hideCart = (dispatch: any) => {
  dispatch({
    type: "TOGGLE_CART",
    showCart: !true,
  });
};

export const logout = (dispatch: any, navigate: any) => {
  dispatch({ type: "SET_USER", user: null });
  dispatch({ type: "SET_CARTITEMS", cartItems: [] });
  dispatch({ type: "SET_ADMIN_MODE", adminMode: false });
  localStorage.removeItem("user");
  localStorage.removeItem("adminMode");
  navigate("/");
};

export const isAdmin = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  return user?.email === "admin@test.com";
};

// Placeholder functions for removed Firebase operations
export const dispatchUsers = () => {};
export const updateUserData = () => {};
export const deleteFood = () => {};
export const ToggleAdminMode = (dispatch: any, val: boolean) => {
  dispatch({ type: "SET_ADMIN_MODE", adminMode: val });
};
export const shuffleItems = (items: any) => {
  return items.sort(() => Math.random() - 0.5);
};

export const getFoodyById = (foodItems: FoodItem[], id: number) => {
  return foodItems.find((food) => food.id === id);
};

export const hideContactform = (dispatch: any) => {
  dispatch({ type: "SET_CONTACT_FORM_VISIBILITY", contactFormVisible: false });
};
