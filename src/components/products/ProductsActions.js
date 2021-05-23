import axios from "axios";
import { toastOnError } from "../../utils/Utils";
import { GET_PRODUCTS, ADD_PRODUCT } from "./ProductsTypes";

export const getProducts = () => dispatch => {
  axios
    .get("/api/v1/products/")
    .then(response => {
      dispatch({
        type: GET_PRODUCTS,
        payload: response.data
      });
    })
    .catch(error => {
      toastOnError(error);
    });
};

export const addProduct = product => dispatch => {
  axios
    .post("/api/v1/products/", product)
    .then(response => {
      dispatch({
        type: ADD_PRODUCT,
        payload: response.data
      });
    })
    .catch(error => {
      toastOnError(error);
    });
};