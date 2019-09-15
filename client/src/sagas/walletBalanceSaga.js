import { put, takeEvery, call } from 'redux-saga/effects'
import * as actions from '../actions/walletBalanceActions'
import { setWalletBalance } from '../actions/walletBalanceActions'
import { getWalletBalance } from '../communications/api'

export const fetchWalletBalance = function* () {
    try {
        const { data: { walletBalance } } = yield call(getWalletBalance)
        yield put(setWalletBalance(walletBalance))
    } catch(err) {
        console.log(err)
    }
}

export const watchSetWalletBalanceSaga = function* () {
    yield takeEvery(actions.FETCH_WALLET_BALANCE, fetchWalletBalance)
}