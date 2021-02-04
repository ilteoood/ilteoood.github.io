import React, {useEffect, useState} from "react";
import {Repository, retrieveFilteredRepo} from "../../services/github.service";
import {SectionTitle} from "../../components/section-title/section-title";
import {RepositoriesPaginationButton} from "./repositories-pagination-button";
import {RepositoriesCards} from "./repositories-cards";

export const Projects: React.FC = () => {

    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [repoToShow, setRepoToShow] = useState<number>(6);

    useEffect(() => {
        retrieveFilteredRepo().subscribe(setRepositories);
    }, []);

    return (
        <div className="padding-content">
            <SectionTitle title="Projects" sectionId="projects"/>
            <RepositoriesCards repoToShow={repoToShow} repositories={repositories}/>
            {repoToShow < repositories.length &&
            <RepositoriesPaginationButton onClick={() => setRepoToShow(repoToShow * 2)}/>}
        </div>
    );
}
