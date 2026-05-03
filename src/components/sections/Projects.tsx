import { QueryClient, QueryClientProvider, useInfiniteQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCodeFork, faEye } from '@fortawesome/free-solid-svg-icons';

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

function GitHubProjectCard({
  name,
  description,
  htmlUrl,
  forks,
  watchers,
  stargazersCount,
}: {
  name: string;
  description: string;
  htmlUrl: string;
  forks: number;
  watchers: number;
  stargazersCount: number;
}) {
  return (
    <a
      href={htmlUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-[#18181b] border border-[#27272a] rounded-xl p-6 hover:border-[#38bdf8] transition-all duration-500 hover:transform hover:-translate-y-1"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-[#fafaf9] mb-2 group-hover:text-[#38bdf8] transition-colors duration-300">
            {name}
          </h3>
          <p className="text-sm text-[#52525b] line-clamp-2 leading-relaxed">
            {description || 'No description available'}
          </p>
        </div>
        <div className="flex-shrink-0 ml-4">
          <svg
            className="w-5 h-5 text-[#52525b] group-hover:text-[#fafaf9] transition-colors duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </div>

      <div className="flex items-center gap-6 pt-4 border-t border-[#27272a]">
        <span className="flex items-center gap-2 text-sm text-[#a1a1aa]">
          <FontAwesomeIcon icon={faStar} className="text-[#f59e0b]" />
          <span>{stargazersCount}</span>
        </span>
        <span className="flex items-center gap-2 text-sm text-[#a1a1aa]">
          <FontAwesomeIcon icon={faCodeFork} className="text-[#3b82f6]" />
          <span>{forks}</span>
        </span>
        <span className="flex items-center gap-2 text-sm text-[#a1a1aa]">
          <FontAwesomeIcon icon={faEye} className="text-[#22c55e]" />
          <span>{watchers}</span>
        </span>
      </div>
    </a>
  );
}

function ProjectsContent() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
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
        className="min-h-screen py-24 px-6 relative"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-[#38bdf8]">
              Work
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-[#27272a] to-transparent" />
          </div>
          <div className="text-center">
            <div className="inline-block w-8 h-8 border-2 border-[#27272a] border-t-[#38bdf8] rounded-full animate-spin" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-6 relative overflow-hidden"
    >
      {/* Background number */}
      <div
        className="absolute text-[20vw] font-bold text-[#111113] select-none pointer-events-none"
        aria-hidden="true"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        03
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-6 mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-[#38bdf8]">
            Projects
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#27272a] to-transparent" />
        </div>

        {/* Header */}
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            <span className="text-[#fafaf9]">Open </span>
            <span className="text-[#38bdf8]">Source</span>
          </h2>
          <p className="text-[#a1a1aa] max-w-2xl">
            A collection of projects I've worked on. From personal experiments to production
            applications, each one represents a learning opportunity.
          </p>
        </div>

        {isLoading ? (
          <div className="text-center py-20">
            <div className="inline-block w-8 h-8 border-2 border-[#27272a] border-t-[#38bdf8] rounded-full animate-spin" />
          </div>
        ) : (
          <>
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {data?.pages.flatMap((page) =>
                page.data.map((repo) => (
                  <GitHubProjectCard
                    key={repo.name}
                    name={repo.name}
                    description={repo.description}
                    htmlUrl={repo.html_url}
                    forks={repo.forks_count}
                    watchers={repo.watchers_count}
                    stargazersCount={repo.stargazers_count}
                  />
                ))
              )}
            </div>

            {hasNextPage && (
              <div className="mt-16 text-center">
                <button
                  onClick={() => fetchNextPage()}
                  disabled={isFetchingNextPage}
                  className="group px-8 py-4 bg-[#18181b] border border-[#27272a] rounded-lg hover:border-[#38bdf8] transition-all duration-300 disabled:opacity-50"
                >
                  <span className="text-sm text-[#a1a1aa] group-hover:text-[#fafaf9] transition-colors">
                    {isFetchingNextPage ? 'Loading...' : 'Load More Projects'}
                  </span>
                </button>
              </div>
            )}
          </>
        )}
      </div>
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