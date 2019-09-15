import * as actions from '../actions/setSelectedItemsActions'
import SetSelectedItemsRecord from '../records/SetSelectedItemsRecord'

export const setSelectedItemsReducer = (state = new SetSelectedItemsRecord(), { type, payload }) => {
    switch(type) {
        case actions.SET_SELECTED_ITEMS:
            return state.merge({ orderSummary: state.orderSummary.concat(payload) })
        case actions.SET_ORDER_TOTAL:
            return state.merge({ orderTotal: Number(state.orderTotal)+Number(payload) })
        case actions.SET_FINAL_ORDER:
            return state.merge({ finalOrder: payload })
        case actions.SET_PROCEED_TO_PLACE_ORDER:
            return state.merge({ proceedToPlaceOrder: payload })
        case actions.SET_ORDER_ID:
            return state.merge({ orderId: payload })
        case actions.SET_PLACE_THE_ORDER:
            return state.merge({ placeTheOrder: payload })
        default:
            return state
    }
}