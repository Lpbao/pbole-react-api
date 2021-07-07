import *as types from "../constants/actions"

const initialState = []

const getIndex = (id , state) => {
    var result = -1
    state.forEach((product , index) => {
        if(product.id === id){
            result = index
        }
    })

    return result
}

const myReducer = (state = initialState , action) =>{
    switch (action.type) {
        case types.FETCH_PRODUCTS:
            return action.products
        case types.DELETE_PRODUCT:
            var newState = state.filter(product => product.id !== action.id)
            return newState
        case types.ADD_PRODUCT:
            state.push(action.product)
            return [...state]
        case types.UPDATE_PRODUCT:
            var index = getIndex(action.product.id , state)
            if(index!== -1){
                state[index] = action.product
            }
            return [...state]
        default:
            return state
    }
}

export default myReducer