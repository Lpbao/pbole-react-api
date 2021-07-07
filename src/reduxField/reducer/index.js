import { combineReducers } from "redux";
import products from "./products"
import editedProduct from "./editedProduct"

const myReducer = combineReducers ({
    products,
    editedProduct,
})

export default myReducer