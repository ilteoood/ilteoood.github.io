import React, {useEffect, useState} from "react";
import styles from './navbar.module.css';

export const NavBar: React.FC = () => {

    const [backgroundClass, setBackgroundClass] = useState("");

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scroll = window.scrollY || window.pageYOffset;
            let backgroundClass = styles.navbarScrolled;
            if (scroll === 0) {
                backgroundClass = "";
            } else if (scroll <= 150) {
                backgroundClass = styles.navbarScrollStart;
            }
            setBackgroundClass(backgroundClass);
        });
    })

    return (
        <div className={`${backgroundClass} ${styles.navbar}`}>
            <a className="navigator pr-4" href="#aboutMe">About me</a>
            <a className="navigator pr-4" href="#projects">Projects</a>
            <a className="navigator pr-4" href="#contacts">Contacts</a>
        </div>
    );
}