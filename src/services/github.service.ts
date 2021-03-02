import {filter, last, map, mergeMap, scan} from "rxjs/operators";
import {Observable} from "rxjs";
import {fromFetch} from "rxjs/fetch";

const sortByPushDate = (repo1: any, repo2: any) => {
    const firstDate = new Date(repo1.updated_at);
    const secondDate = new Date(repo2.updated_at);
    return secondDate.getTime() - firstDate.getTime();
}

export interface Repository {
    fork: boolean;
    archived: boolean;
    name: string;
    updated_at: string;
    html_url: string;
    description: string;
    forks_count: number;
    stargazers_count: number;
    watchers_count: number;
    open_issues_count: number;
}

export function retrieveFilteredRepo(): Observable<Repository[]> {
    return fromFetch<Repository[]>("https://api.github.com/users/ilteoood/repos?per_page=100",
        {selector: response => response.json()})
        .pipe(
            mergeMap(repoResponse => repoResponse),
            filter(repository => !repository.fork),
            filter(repository => !repository.archived),
            scan((accumulator, value) => [...accumulator, value], [] as Repository[]),
            last(),
            map(repoArray => repoArray.sort(sortByPushDate))
        );
}
