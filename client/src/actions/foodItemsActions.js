export const SET_FOOD_ITEMS = 'SET_FOOD_ITEMS'
export const FETCH_FOOD_ITEMS = 'FETCH_FOOD_ITEMS'

export const setFoodItems = data => ({
    type: SET_FOOD_ITEMS,
    payload: data
})

export const fetchFoodItems = () => ({
    type: FETCH_FOOD_ITEMS
})