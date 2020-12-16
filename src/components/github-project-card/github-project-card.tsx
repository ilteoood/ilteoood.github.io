import {Repository} from "../../services/github.service";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCodeBranch, faExclamationCircle, faEye, faStar} from "@fortawesome/free-solid-svg-icons";
import './github-project-card.scss';

export interface GithubProjectCardProp {
    repository: Repository
}

export const GithubProjectCard: React.FC<GithubProjectCardProp> = ({repository}) => {
    return (
        <div className="flex flex-col text-color">
            <a className="mr-4" href={repository.html_url}>{repository.name}</a>
            <p className="text-lg italic">{repository.description}</p>
            <div className="flex flex-row">
                {repository.forks_count}
                <FontAwesomeIcon className="project-card-icon" icon={faCodeBranch}/>
                {repository.stargazers_count}
                <FontAwesomeIcon className="project-card-icon" icon={faStar}/>
                {repository.watchers_count}
                <FontAwesomeIcon className="project-card-icon" icon={faEye}/>
                {repository.open_issues_count}
                <FontAwesomeIcon className="project-card-icon" icon={faExclamationCircle}/>
            </div>
        </div>
    );
}
