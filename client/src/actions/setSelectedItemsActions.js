export const SET_SELECTED_ITEMS = 'SET_SELECTED_ITEMS'
export const SET_ORDER_TOTAL = 'SET_ORDER_TOTAL'
export const SET_FINAL_ORDER = 'SET_FINAL_ORDER'
export const SET_PROCEED_TO_PLACE_ORDER = 'SET_PROCEED_TO_PLACE_ORDER'
export const SET_ORDER_ID = 'SET_ORDER_ID'
export const SET_PLACE_THE_ORDER = 'SET_PLACE_THE_ORDER'

export const setSelectedItems = data => ({
    type: SET_SELECTED_ITEMS,
    payload: data
})

export const setOrderTotal = data => ({
    type: SET_ORDER_TOTAL,
    payload: data
})

export const setFinalOrder = data => ({
    type: SET_FINAL_ORDER,
    payload: data
})

export const setProceedToPlaceOrder = data => ({
    type: SET_PROCEED_TO_PLACE_ORDER,
    payload: data
})

export const setOrderId = data => ({
    type: SET_ORDER_ID,
    payload: data
})

export const setPlaceTheOrder = data => ({
    type: SET_PLACE_THE_ORDER,
    payload: data
})