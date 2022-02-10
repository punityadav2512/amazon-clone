import React from 'react';
import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Header() {
    return (
        <div className='header'>
            <img src="" alt="Amazon" className="header__logo" />
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className='header__searchIcon'></SearchIcon>
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello, Guest</span>
                    <span className="header__optionLineTwo">SignIn</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <div className="header__optionBasket">
                    <ShoppingCartIcon />
                    <span className="header__optionLineTwo header__basketCount">0</span>
                </div>
            </div>
        </div>
    )
}

export default Header