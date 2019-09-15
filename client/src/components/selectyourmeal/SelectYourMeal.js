import React from 'react';
import { connect } from 'react-redux'
import './SelectYourMeal.css'
import MealItemList from '../mealitemlist/MealItemList'

class SelectYourMeal extends React.Component {

    render() {
        const { foodItems } = this.props
        return (
            <div className="collapsibleContainers">
                <MealItemList
                    heading={'Select your breakfast'}
                    items={foodItems.itemsForBreakFast}
                />

                <MealItemList
                    heading={'Select your lunch'}
                    items={foodItems.itemsForLunch}
                />
            </div>
        )
    }
}

export const mapStateToProps = state => ({
    foodItems: state.meals.get('foodItems')
})

export default connect(mapStateToProps, null)(SelectYourMeal)