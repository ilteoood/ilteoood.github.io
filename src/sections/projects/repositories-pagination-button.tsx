import React from "react";
import styles from './repo-pagination-button.module.css';

export const RepositoriesPaginationButton: React.FC<React.ButtonHTMLAttributes<any>> = ({onClick}) => {
    return (
        <div className="flex place-content-center">
            <div className={`${styles.projectsPaginationButton} text-color`} onClick={onClick}>
                Show more
            </div>
        </div>
    );
}