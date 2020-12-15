import React, {useEffect, useState} from "react";
import {Repository, retrieveFilteredRepo} from "../../services/github.service";

export const Projects: React.FC = () => {

    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        retrieveFilteredRepo()
            .subscribe(response => setRepositories(response));
    }, []);

    return (
        <>

        </>
    );
}