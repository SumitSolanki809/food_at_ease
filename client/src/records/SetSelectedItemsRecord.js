import Immutable from 'immutable'

const SetSelectedItemsRecord = Immutable.Record({
    orderSummary: [],
    orderTotal: 0,
    finalOrder: 'no meal selected',
    proceedToPlaceOrder: false,
    orderId: 0,
    placeTheOrder: false
})

export default SetSelectedItemsRecord