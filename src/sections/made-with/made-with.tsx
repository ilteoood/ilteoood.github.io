import React from "react";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {faReact} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from './made-with.module.css';

export const MadeWith: React.FC = () => {
    return (
        <div className="flex place-content-center text-color pb-1">
            Made with <FontAwesomeIcon className={styles.heartIcon} icon={faHeart}/> and
            <a href="https://reactjs.org/" className="cursor-pointer">
                <FontAwesomeIcon className={styles.reactIcon} icon={faReact}/>
            </a>
        </div>
    );
}