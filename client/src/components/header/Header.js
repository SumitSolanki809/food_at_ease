import React from 'react'
import Wallet from '../wallet/Wallet'
import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <header className="headerContainer">
                <img 
                    className="header_logo"
                    alt="header logo"
                    src="https://p7.hiclipart.com/preview/757/1018/421/fizzy-drinks-computer-icons-meal-food-lunch-food-icon.jpg" 
                />
                <h1>Food at ease</h1>
                <Wallet />
            </header>
        )
    }
}

export default Header