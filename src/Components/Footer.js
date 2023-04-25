import React from "react";
import "../Styles/Footer.css";
import logo from "../Images/air-canada-2-logo-png-transparent.jpg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="item1">
                    <img src={logo} className="footer-logo" />
                </div>

                <div className="item2">
                    <span style={{ paddingRight: 5 }}>©</span>

                    <span style={{ paddingRight: 5 }}>
                        {new Date().getFullYear()} SuicidAir
                    </span>
                </div>
                <a className="destination-link" href="/Destination">Destination</a>
                <a href="/AboutUs">À propos de nous</a>
                <a href="/CustomerSupport">Soutien au client</a>
            </div>
        </footer>
    );
};

export default Footer;
