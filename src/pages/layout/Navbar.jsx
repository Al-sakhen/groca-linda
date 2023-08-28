import { NavLink } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import {
    AiOutlinePhone,
    AiOutlineTwitter,
    AiFillFacebook,
    AiFillInstagram,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import style from "./navbar.module.css";

import logo from "/logo.webp";

const Navbar = () => {
    return (
        <>
            <div className={style.bg_green + " " + style.nav_header}>
                <div className="container text-white py-2 d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <div className="d-flex flex-column flex-md-row">
                        <div
                            className={
                                style.border +
                                " border-end pe-2 border-1 d-flex align-items-center"
                            }
                        >
                            <HiOutlineMail />
                            <span className="ms-1">info@example.com</span>
                        </div>
                        <div className="ps-2 d-flex align-items-center">
                            <AiOutlinePhone />
                            <span className="ms-1">0000 - 123456789</span>
                        </div>
                    </div>
                    <div className="d-flex gap-2 mt-2 mt-md-0">
                        <AiOutlineTwitter />
                        <AiFillFacebook />
                        <BsPinterest />
                        <AiFillInstagram />
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className={style.ahmad + " navbar-brand"} href="#">
                        <img src={logo} className={style.logo} />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/cart">
                                    Cart
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/orders">
                                    Orders
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
