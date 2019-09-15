export const FETCH_WALLET_BALANCE = 'FETCH_WALLET_BALANCE'
export const SET_WALLET_BALANCE = 'SET_WALLET_BALANCE'
export const UPDATE_WALLET_BALANCE = 'UPDATE_WALLET_BALANCE'

export const fetchWalletBalance = () => ({
    type: FETCH_WALLET_BALANCE
})

export const setWalletBalance = data => ({
    type: SET_WALLET_BALANCE,
    payload: data
})

export const updateWalletBalance = data => ({
    type: UPDATE_WALLET_BALANCE,
    payload: data
})