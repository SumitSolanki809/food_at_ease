import * as actions from '../actions/foodItemsActions'
import SetFoodItemsRecord from '../records/SetFoodItemsRecord'

export const setFoodItemsReducer = (state = new SetFoodItemsRecord(), { type, payload }) => {
    switch(type) {
        case actions.SET_FOOD_ITEMS:
            return state.merge({ foodItems: payload })
        default:
            return state
    }
}