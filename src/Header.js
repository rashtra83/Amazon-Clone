import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './Firebase';

function Header() {
    const [{ basket, user }] = useStateValue();
    
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="amazon_logo"
                />
            </Link>
            <div className="header__search">
                <input
                    className="header__searchInput"
                    type="text" >
                </input>
                <SearchIcon type ="submit" className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to={!user && "./login"}>
                <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">Hello {user ? user.email:  "Guest" }</span>
                    <span className="header__optionLineTwo">{(user)?'Sign Out': 'Sign In'}</span>
                </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <AddShoppingCartOutlinedIcon />
                        <span className="header__optionTwo header__basketCount">{basket.length}</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header
