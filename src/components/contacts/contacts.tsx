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

    const iconMapper = ({icon, link}: Contact) => <a className="icon pl-10 md:pl-15 xl:pl-20" href={link} key={icon.toString()}>
        <FontAwesomeIcon icon={icon}/>
    </a>;

    return (
        <div className="flex place-content-center">
            {contacts.map(iconMapper)}
        </div>
    );

}
