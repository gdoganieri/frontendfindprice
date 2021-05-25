import axios from "axios";
import { toastOnError } from "../../utils/Utils";
import { GET_PRODUCTS, ADD_PRODUCT , DELETE_PRODUCT, UPDATE_PRODUCT} from "./ProductsTypes";

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

export const deleteProduct = id => dispatch => {
  axios
    .delete(`/api/v1/products/${id}/`)
    .then(response => {
      dispatch({
        type: DELETE_PRODUCT,
        payload: id
      });
    })
    .catch(error => {
      toastOnError(error);
    });
};

export const updateProduct = (id, product) => dispatch => {
  axios
    .patch(`/api/v1/products/${id}/`, product)
    .then(response => {
      dispatch({
        type: UPDATE_PRODUCT,
        payload: response.data
      });
    })
    .catch(error => {
      toastOnError(error);
    });
};