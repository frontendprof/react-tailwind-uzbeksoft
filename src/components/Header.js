
import React from 'react';
import { FaShoppingCart,FaUserPlus,FaBars,FaSearch } from 'react-icons/fa';



import Logo from "../images/logo.png";



const Header = () => {
    return (
        <header className="header flex items-center justify-between py-3">

           <div className="menu-btn flex">
               <div className="mx-4"><FaBars /> </div>
               <div> <FaSearch /></div>
            </div>

            <div className="logo">
                <img src={Logo} alt="logo"/>
            </div>

            <div className="cart flex">

                <div>
                    <FaShoppingCart />
                </div>

                <div className="mx-4">
                    <FaUserPlus />
                </div>
            </div>

        </header>
    )
}

export default Header
