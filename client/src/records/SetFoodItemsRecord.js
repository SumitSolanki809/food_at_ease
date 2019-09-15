import Immutable from 'immutable'

const SetFoodItemsRecord = Immutable.Record({
    foodItems: {
        itemsForBreakFast: [],
        itemsForLunch: []
    }
})

export default SetFoodItemsRecord