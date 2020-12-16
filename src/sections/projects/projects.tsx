import React, {useEffect, useState} from "react";
import {Repository, retrieveFilteredRepo} from "../../services/github.service";
import {GithubProjectCard} from "../../components/github-project-card/github-project-card";
import {SectionTitle} from "../../components/section-title/section-title";
import './projets.scss';

export const Projects: React.FC = () => {

    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [repoToShow, setRepoToShow] = useState<number>(3);

    useEffect(() => {
        retrieveFilteredRepo()
            .subscribe(response => setRepositories(response));
    }, []);

    return (
        <div className="padding-content">
            <SectionTitle title="Projects" sectionId="projects"/>
            <RepositoriesCards repoToShow={repoToShow} repositories={repositories}/>
            {repoToShow < repositories.length &&
            <RepoPaginationButton onClick={() => setRepoToShow(repoToShow * 2)}/>}
        </div>
    );
}

interface RepositoriesCardsProp {
    repoToShow: number,
    repositories: Repository[]
}

const RepositoriesCards: React.FC<RepositoriesCardsProp> = ({repoToShow, repositories}) => {
    return (
        <div className="flex flex-wrap">
            {
                repositories
                    .slice(0, repoToShow)
                    .map(repository =>
                        <div className="mr-5 md:mr-10 xl:mr-14">
                            <GithubProjectCard key={repository.name} repository={repository}/>
                        </div>
                    )
            }
        </div>
    );
}

const RepoPaginationButton: React.FC<React.ButtonHTMLAttributes<any>> = ({onClick}) => {
    return (
        <div className="flex place-content-center">
            <div className="projects-pagination-button text-color" onClick={onClick}>
                Show more
            </div>
        </div>
    );
}
