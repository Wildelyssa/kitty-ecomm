import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constants";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("ADD_TO_CART condition", action);
      return [action.data, ...data];
    case REMOVE_FROM_CART:
      console.log("REMOVE_FROM_CART condition", action);
      // decrease the amount by removing the last item:
      // data.length= data.length? data.length - 1 : []
      // filter by id to remove the correct item from the cart:
      const remainingItems = data.filter((item) => item.id !== action.data);
      return [...remainingItems];
    // removes all items of that id instead of just one at a time
    case EMPTY_CART:
      console.log("EMPTY_CART condition", action);
      data = [];
      return [];
    default:
      return data;
    // This is the initial condition and should return the data- it can't return null
  }
};
