import React from 'react';
import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logoImg from './images/download.png';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
function Header() {

    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className='header'>
            <Link to="/">  <img src={logoImg} alt="Amazon" className="header__logo" /></Link>
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
                <Link to={'/checkout'}>
                    <div className="header__optionBasket">
                        <ShoppingCartIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header