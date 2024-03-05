// Navbar.js

import React from 'react';
import './Navbar.css'; // Navbar için özel CSS dosyası

const Navbar = () => {
    return (
        <header id="header">
           
            <nav className="main-nav">
                <ul>

                    <li><a href="/">ILLUSTRATION</a></li>
                    <li><a href="">DESIGN</a></li>
                    <li><a href="https://www.shopier.com/ShowProductNew/storefront.php?shop=burcugencturk&sid=RDkwUUtCQkNSbHhMcm5hYTBfLTFfIF8g">BUY</a></li>
                    
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
