import { all, fork } from 'redux-saga/effects'
import { watchSetFoodItemsSaga } from './setFoodItemsSaga'
import { watchSetWalletBalanceSaga } from './walletBalanceSaga'
import { watchSendCredentialsSaga } from './credentialsSaga'

export const rootSaga = function* () {
    yield all([
        fork(watchSetFoodItemsSaga),
        fork(watchSetWalletBalanceSaga),
        fork(watchSendCredentialsSaga)
    ])
}