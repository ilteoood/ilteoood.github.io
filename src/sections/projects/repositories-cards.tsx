import React from "react";
import {Repository} from "../../services/github.service";
import {GitHubProjectCard} from "../../components/github-project-card/git-hub-project-card";

interface RepositoriesCardsProp {
    repoToShow: number,
    repositories: Repository[]
}

export const RepositoriesCards: React.FC<RepositoriesCardsProp> = ({repoToShow, repositories}) => {
    return (
        <div className="flex flex-wrap">
            {
                repositories
                    .slice(0, repoToShow)
                    .map(repository =>
                        <div className="mt-5" key={repository.name}>
                            <GitHubProjectCard repository={repository}/>
                        </div>
                    )
            }
        </div>
    );
}
