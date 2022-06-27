
import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Navbar.module.scss"
import "../../App.css"


const Navbar = () => {
    return (
        <nav className={styles.navMainContainer}>
            <div className={styles.navSubContainer}>
                <Link to="/" className={styles.navLink}>
                    Rick & Morty <span className={styles.navTittle}>WiKi</span>
                </Link>
                <div
                    className={styles.navButtonsContainer}>
                    <div className={styles.navButtons}>
                        <NavLink to="/" className={styles.navLink}>
                            Characters
                        </NavLink>
                        <NavLink to="/Episodes" className={styles.navLink}>
                            Episodes
                        </NavLink>
                        <NavLink
                            activeclassname="active" className={styles.navLink}
                            to="/Location" >Location</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar