import *as types from '../constants/actions'

var initialState = {}

const myReducer = (state = initialState , action ) => {
    switch (action.type) {
        case types.EDIT_PRODUCT:
            return action.product
        default:
            return state
    }
}

export default myReducer