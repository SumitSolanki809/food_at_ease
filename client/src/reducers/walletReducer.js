import * as actions from '../actions/walletBalanceActions'
import WalletRecord from '../records/walletRecord'

export const walletReducer = (state = new WalletRecord() , { type, payload }) => {
    switch(type) {
        case actions.SET_WALLET_BALANCE:
            return state.merge({ walletBalance: payload })
        case actions.UPDATE_WALLET_BALANCE:
            return state.merge({ walletBalance: payload })
        default:
            return state
    }
}