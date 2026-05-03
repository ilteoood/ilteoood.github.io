import { QueryClient, QueryClientProvider, useInfiniteQuery } from '@tanstack/react-query';
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

interface GitHubResponse {
  data: Repository[];
  nextPage: number | null;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

async function fetchRepos({ pageParam = 1 }: { pageParam?: number }): Promise<GitHubResponse> {
  const response = await fetch(
    `https://api.github.com/users/ilteoood/repos?sort=pushed&per_page=10&page=${pageParam}`
  );
  const data: Repository[] = await response.json();

  const filtered = data
    .filter((repo) => !repo.fork && !repo.archived)
    .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());

  const linkHeader = response.headers.get('Link') || '';
  const nextPageMatch = linkHeader.match(/<[^>]*[?&]page=(\d+)[^>]*>;\s*rel="next"/);
  const nextPage = nextPageMatch ? parseInt(nextPageMatch[1], 10) : null;

  return { data: filtered, nextPage };
}

function ProjectsContent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ['repos'],
    queryFn: fetchRepos,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,
    enabled: mounted,
  });

  if (!mounted) {
    return (
      <section
        id="projects"
        className="min-h-screen flex flex-col items-center justify-center px-10 md:px-20 xl:px-40 py-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-100">Projects</h2>
        <div className="text-gray-400">Loading projects...</div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-10 md:px-20 xl:px-40 py-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-100">Projects</h2>

      {isLoading ? (
        <div className="text-gray-400">Loading projects...</div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {data?.pages.flatMap((page) =>
              page.data.map((repo) => (
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
              ))
            )}
          </div>

          {hasNextPage && (
            <button
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
              className="mt-8 px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors text-gray-200 disabled:opacity-50"
            >
              {isFetchingNextPage ? 'Loading...' : 'Show more'}
            </button>
          )}
        </>
      )}
    </section>
  );
}

export default function Projects() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProjectsContent />
    </QueryClientProvider>
  );
}