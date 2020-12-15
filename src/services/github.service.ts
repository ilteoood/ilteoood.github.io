import {fromPromise} from "rxjs/internal-compatibility";
import {filter, last, map, mergeMap, scan} from "rxjs/operators";
import {Octokit} from "@octokit/rest";
import {Endpoints} from "@octokit/types";
import {Observable} from "rxjs";

const sortByPushDate = (repo1: any, repo2: any) => {
    const firstDate = new Date(repo1.updated_at);
    const secondDate = new Date(repo2.updated_at);
    return secondDate.getTime() - firstDate.getTime();
}

const repoBlacklist = ['portfolio', 'resume', 'ilteoood.github.io', 'ilteoood'];

export type Repository = Endpoints["GET /users/{username}/repos"]["response"]["data"];

export function retrieveFilteredRepo(): Observable<Repository[]> {
    const octokit = new Octokit();
    const repoList = octokit.repos.listForUser({username: "ilteoood"});
    return fromPromise(repoList)
        .pipe(
            mergeMap(repoResponse => repoResponse.data),
            filter(repository => !repository.fork),
            filter(repository => !repository.archived),
            filter(repository => !repoBlacklist.includes(repository.name)),
            scan((accumulator, value) => [...accumulator, value], [] as any),
            last(),
            map(repoArray => repoArray.sort(sortByPushDate))
        );
}