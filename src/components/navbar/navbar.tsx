import React, {useEffect, useState} from "react";
import './navbar.scss';

export const NavBar: React.FC = () => {

    const [backgroundClass, setBackgroundClass] = useState("");

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scroll = window.scrollY || window.pageYOffset;
            let backgroundClass = "navbar-scrolled";
            if (scroll === 0) {
                backgroundClass = "";
            } else if (scroll <= 150) {
                backgroundClass = "navbar-scroll-start";
            }
            setBackgroundClass(backgroundClass);
        });
    })

    return (
        <div className={backgroundClass + " fixed flex flex-row-reverse md:p-10 p-5 w-full"}>
            <a className="navigator pr-4" href="#contacts">Contacts</a>
            <a className="navigator pr-4" href="#projects">Projects</a>
            <a className="navigator pr-4" href="#aboutMe">About me</a>
        </div>
    );
}
