import { all, fork } from 'redux-saga/effects'
import { watchSetFoodItemsSaga } from './setFoodItemsSaga'
import { watchSetWalletBalanceSaga } from './walletBalanceSaga'

export const rootSaga = function* () {
    yield all([
        fork(watchSetFoodItemsSaga),
        fork(watchSetWalletBalanceSaga)
    ])
}