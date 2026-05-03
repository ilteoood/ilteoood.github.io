import { faStar, faCodeFork, faEye, faBug } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface GitHubProjectCardProps {
  name: string;
  description: string;
  htmlUrl: string;
  forks: number;
  watchers: number;
  openIssues: number;
  stargazersCount: number;
}

export default function GitHubProjectCard({
  name,
  description,
  htmlUrl,
  forks,
  watchers,
  openIssues,
  stargazersCount,
}: GitHubProjectCardProps) {
  return (
    <a
      href={htmlUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors border border-gray-600 hover:border-gray-500"
    >
      <h3 className="text-xl font-semibold text-gray-100 mb-2">{name}</h3>
      <p className="text-gray-300 mb-4 min-h-[3rem]">{description || 'No description available'}</p>
      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
        <span className="flex items-center gap-1">
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          {stargazersCount}
        </span>
        <span className="flex items-center gap-1">
          <FontAwesomeIcon icon={faCodeFork} className="text-blue-400" />
          {forks}
        </span>
        <span className="flex items-center gap-1">
          <FontAwesomeIcon icon={faEye} className="text-green-400" />
          {watchers}
        </span>
        <span className="flex items-center gap-1">
          <FontAwesomeIcon icon={faBug} className="text-red-400" />
          {openIssues}
        </span>
      </div>
    </a>
  );
}