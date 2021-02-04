import React from "react";
import './repo-pagination-button.scss';

export const RepositoriesPaginationButton: React.FC<React.ButtonHTMLAttributes<any>> = ({onClick}) => {
    return (
        <div className="flex place-content-center">
            <div className="projects-pagination-button text-color" onClick={onClick}>
                Show more
            </div>
        </div>
    );
}
