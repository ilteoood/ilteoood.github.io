import { useState, useEffect } from 'react';
import GitHubProjectCard from '../GitHubProjectCard';

interface Repository {
  name: string;
  description: string;
  html_url: string;
  forks: number;
  watchers_count: number;
  open_issues_count: number;
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
  pushed_at: string;
}

export default function Projects() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [displayedRepos, setDisplayedRepos] = useState<Repository[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const perPage = 6;

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/ilteoood/repos?sort=pushed&per_page=100'
        );
        const data: Repository[] = await response.json();
        const filtered = data
          .filter((repo) => !repo.fork && !repo.archived)
          .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());
        setRepos(filtered);
        setDisplayedRepos(filtered.slice(0, perPage));
      } catch (error) {
        console.error('Failed to fetch repos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const loadMore = () => {
    const nextPage = page + 1;
    const nextRepos = repos.slice(0, nextPage * perPage);
    setDisplayedRepos(nextRepos);
    setPage(nextPage);
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-10 md:px-20 xl:px-40 py-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-100">Projects</h2>

      {loading ? (
        <div className="text-gray-400">Loading projects...</div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {displayedRepos.map((repo) => (
              <GitHubProjectCard
                key={repo.name}
                name={repo.name}
                description={repo.description}
                htmlUrl={repo.html_url}
                forks={repo.forks}
                watchers={repo.watchers_count}
                openIssues={repo.open_issues_count}
                stargazersCount={repo.stargazers_count}
              />
            ))}
          </div>

          {displayedRepos.length < repos.length && (
            <button
              onClick={loadMore}
              className="mt-8 px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors text-gray-200"
            >
              Show more
            </button>
          )}
        </>
      )}
    </section>
  );
}