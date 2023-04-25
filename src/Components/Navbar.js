// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// // class Navbar extends Component {
// //     handleClick = () => this.props.onClick(this.props.index);

// //     render() {
// //         return (
// //             <Link to={`/${this.props.name}`}>
// //                 <li
// //                     className={this.props.isActive ? "active" : ""}
// //                     onClick={this.handleClick}
// //                 >
// //                     {this.props.name}
// //                 </li>
// //             </Link>
// //         );
// //     }
// // }

// function Navbar() {
//     return (
//         <nav className="nav">
//             <a href="/" className="site-title">Site name</a>
//             <ul>
//                 <li>
//                     <a href="/AboutUs">About us</a>
//                     <a href="/CustomerSupport">Customer Support</a>
//                 </li>
//             </ul>
//         </nav>
//     )
// }

// export default Navbar;

import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../Styles/Styles.css";
import logo from "../Images/air-canada-2-logo-png-transparent.jpg";

export default function Navbar() {
    return (
        <div>
            {" "}
            <nav className="nav">
                <Link to="/" className="site-title">
                    <img src={logo} alt="Logo" className="logo" />
                </Link>
                <ul>
                    <CustomLink to="/Destination">Destination</CustomLink>
                    <CustomLink to="/Authors">Auteurs</CustomLink>
                    <CustomLink to="/AboutUs">À propos de nous</CustomLink>
                    <CustomLink to="/CustomerSupport">
                        Soutien au client
                    </CustomLink>
                </ul>
            </nav>
        </div>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}
