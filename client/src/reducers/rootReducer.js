import { combineReducers } from 'redux';
import { setFoodItemsReducer } from './setFoodItemsReducer'
import { setSelectedItemsReducer } from './setSelectedItemsReducer'
import { walletReducer } from './walletReducer'

export default combineReducers({
    meals: setFoodItemsReducer,
    order: setSelectedItemsReducer,
    wallet: walletReducer
})