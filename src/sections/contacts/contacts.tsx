import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {IconDefinition, IconProp} from "@fortawesome/fontawesome-svg-core";
import {faFacebook, faGithub, faInstagram, faLinkedin, faMedium, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faSquare, faCircle} from "@fortawesome/free-solid-svg-icons";
import './contacts.scss';

type BackgroundType = 'circle' | 'square';

interface Contact {
    icon: IconProp;
    link: string;
    backgroundType?: BackgroundType;
}

type IconBackground = {
    [k in BackgroundType]: IconDefinition;
};

export const Contacts: React.FC = () => {

    const contacts: Contact[] = [{
        icon: faMedium,
        link: 'https://medium.com/@iLTeoooD',
        backgroundType: "square"
    }, {
        icon: faLinkedin,
        link: 'https://www.linkedin.com/in/ilteoood/',
        backgroundType: "square"
    }, {
        icon: faGithub,
        link: 'https://github.com/ilteoood/'
    }, {
        icon: faEnvelope,
        link: 'mailto:matteopietro.dazzi@gmail.com'
    }, {
        icon: faTelegram,
        link: 'https://telegram.me/iLTeoooD',
        backgroundType: "circle"
    }, {
        icon: faFacebook,
        link: 'https://facebook.com/iLTeoooD',
        backgroundType: "circle"
    }, {
        icon: faInstagram,
        link: 'https://www.instagram.com/_ilteoood'
    }];

    const iconsMap: IconBackground = {
        'square': faSquare,
        'circle': faCircle
    };

    const applyBackground = (backgroundType: BackgroundType) => {
        return <FontAwesomeIcon icon={iconsMap[backgroundType]} className="fa-white-background"/>;
    }

    const iconMapper = ({icon, link, backgroundType}: Contact, index: number) =>
        <a className="icon fa-layers fa-fw" href={link} key={index}>
            {backgroundType && applyBackground(backgroundType)}
            <FontAwesomeIcon icon={icon}/>
        </a>;

    return (
        <>
            <div className="contacts-container" id="contacts">
                {contacts.map(iconMapper)}
            </div>
            <InstagramGradient/>
        </>
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
