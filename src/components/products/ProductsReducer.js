import {GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT, GET_CATEGORIES} from "./ProductsTypes";

const initialState = {
  products: []
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((item, index) => item.id !== action.payload)
      };
    case UPDATE_PRODUCT:
      const updatedProducts = state.products.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, ...action.payload };
        }
        return item;
      });
      return {
        ...state,
        products: updatedProducts
      };
      case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    default:
      return state;
  }
};
