import * as React from "react";
import logo from './../imgs/logo-black-transparent.png';

function Header() {
    return (
        <header>
            <img src={logo} alt="Pikle.it Logo" />
        </header>
    );
}

export default Header;