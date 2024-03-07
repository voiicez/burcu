// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom'; 
import './Navbar.css'; 

const Navbar = () => {
    return (
        <header id="header">
            <nav className="main-nav">
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active-link">
                            ILLUSTRATION
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/design" activeClassName="active-link">
                            DESIGN
                        </NavLink>
                    </li>
                    <li>
                        <a href="https://www.shopier.com/ShowProductNew/storefront.php?shop=burcugencturk&sid=RDkwUUtCQkNSbHhMcm5hYTBfLTFfIF8g" activeClassName="active-link">
                            BUY
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
