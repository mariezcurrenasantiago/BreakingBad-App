import React from "react";
import logo from "../assets/logo.png";


const Header = () => {
    return (
        <header className="center">
            <img src={logo} alt="Breaking Bad" className="logo" />
        </header>
    )
}
export default Header;