import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

const initialState = {
  user: JSON.parse(localStorage.getItem("user") || "null"),
  foodItems: [],
  cartItems: [],
  cartTotal: 0,
  showCart: false,
  showContactForm: false,
  adminMode: JSON.parse(localStorage.getItem("adminMode") || "false"),
  users: [],
};

// Update your reducer to handle localStorage persistence
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      localStorage.setItem("user", JSON.stringify(action.user));
      return { ...state, user: action.user };
    case "SET_ADMIN_MODE":
      localStorage.setItem("adminMode", JSON.stringify(action.adminMode));
      return { ...state, adminMode: action.adminMode };
    case "SET_CARTITEMS":
      return { ...state, cartItems: action.cartItems };
    // Add other cases as needed
    default:
      return state;
  }
};
