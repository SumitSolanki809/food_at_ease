import { put, takeEvery, call } from 'redux-saga/effects'
import * as actions from '../actions/foodItemsActions'
import { setFoodItems } from '../actions/foodItemsActions'
import { getFoodData } from '../communications/api'

export const fetchFoodItems = function* () {
    try {
        const { data } = yield call(getFoodData)
        yield put(setFoodItems(data))
    } catch(err) {
        console.log(err)
    }
}

export const watchSetFoodItemsSaga = function* () {
    yield takeEvery(actions.FETCH_FOOD_ITEMS, fetchFoodItems)
}