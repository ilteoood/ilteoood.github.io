import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {faFacebook, faGithub, faInstagram, faLinkedin, faMedium, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import './contacts.scss';

interface Contact {
    icon: IconProp;
    link: string;
}

export const Contacts: React.FC = () => {

    const contacts: Contact[] = [{
        icon: faMedium,
        link: 'https://medium.com/@iLTeoooD'
    }, {
        icon: faLinkedin,
        link: 'https://www.linkedin.com/in/ilteoood/'
    }, {
        icon: faGithub,
        link: 'https://github.com/ilteoood/'
    }, {
        icon: faEnvelope,
        link: 'mailto:matteopietro.dazzi@gmail.com'
    }, {
        icon: faTelegram,
        link: 'https://telegram.me/iLTeoooD'
    }, {
        icon: faFacebook,
        link: 'https://facebook.com/iLTeoooD'
    }, {
        icon: faInstagram,
        link: 'https://www.instagram.com/_ilteoood'
    }];

    const iconMapper = ({icon, link}: Contact, index: number) =>
        <a className="icon" href={link} key={index}>
            <FontAwesomeIcon icon={icon}/>
        </a>;

    return (
        <div className="contacts-container" id="contacts">
            {contacts.map(iconMapper)}
            <InstagramGradient/>
        </div>
    );

}

const InstagramGradient: React.FC = () => {
    return (
        <svg width="0" height="0">
            <radialGradient id="instagradient" r="150%" cx="30%" cy="107%">
                <stop stop-color="#fdf497" offset="0"/>
                <stop stop-color="#fdf497" offset="0.05"/>
                <stop stop-color="#fd5949" offset="0.45"/>
                <stop stop-color="#d6249f" offset="0.6"/>
                <stop stop-color="#285AEB" offset="0.9"/>
            </radialGradient>
        </svg>
    );
}
