import *as types from "../constants/actions"
import callAPI from "../../utils/apiCaller"

export const requestServer = (dispatch) => {
    return () => {
        callAPI('products' , 'GET' , null).then(res => {
            dispatch(fetchProducts(res.data))
        })
    }
}

export const fetchProducts = (products) => {
    return{
        type: types.FETCH_PRODUCTS , 
        products
    }
}

export const requestServerDelete = ( dispatch ,id) => {
    return () => {
        dispatch(deleteProduct(id))
        callAPI(`products/${id}` , 'DELETE' , null).then(res => {
            dispatch(deleteProduct(id))
        })
    }
}

export const deleteProduct = (id) => {
    return {
        type: types.DELETE_PRODUCT , 
        id
    }
}

export const requestServerAdd = (dispatch , history , product) => {
    return () => {
        callAPI('products' , 'POST' , product).then(res => {
            dispatch(addProduct(res.data))
            history.goBack()
        })
    }
}

export const addProduct = (product) => {
    return {
        type: types.ADD_PRODUCT,
        product
    }
}

export const getEditedProduct = (dispatch , id) => {
    return () => { 
        callAPI(`products/${id}` , 'GET' , null).then(res => {
            dispatch(toEditedProduct(res.data))
        })
    }
}

export const toEditedProduct = (product) => {
    return {
        type: types.EDIT_PRODUCT,
        product
    }
}

export const requestServerUpdate = (dispatch , history , product) => {
    return () => {
        callAPI(`products/${product.id}` , 'PUT' , product).then(res => {
            dispatch(updateProduct(product))
            history.goBack()
        })
    }
}

export const updateProduct = (product) => {
    return {
        type: types.UPDATE_PRODUCT,
        product
    }
}