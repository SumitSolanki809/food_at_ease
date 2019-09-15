import axios from 'axios'

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