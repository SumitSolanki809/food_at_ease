import axios from 'axios'

export async function sendCredentialsToServer(url, params) {
    return await axios.post(url, params)
    .then(response => {
        return response
    })
    .catch(error => {
        return error
    })
}

export async function getFoodData(url) {
    return await axios.get(url || '/api/foodData')
    .then(response => {
        return response
    })
    .catch(error => {
        return error
    })
}

export async function getWalletBalance(url) {
    return await axios.get(url || '/api/balance')
    .then(response => {
        return response
    })
    .catch(error => {
        return error
    })
}