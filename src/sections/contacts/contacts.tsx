import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {faFacebook, faGithub, faInstagram, faLinkedin, faMedium, faTelegram} from "@fortawesome/free-brands-svg-icons";

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
        <div className="flex place-content-center py-10 space-x-6 sm:space-x-10 md:space-x-16 xl:space-x-20" id="contacts">
            {contacts.map(iconMapper)}
        </div>
    );

}
