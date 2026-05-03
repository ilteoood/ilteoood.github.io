import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';

export default function MadeWith() {
  return (
    <footer className="py-8 text-center bg-gray-900">
      <p className="text-gray-400 flex items-center justify-center gap-2">
        Made with <FontAwesomeIcon icon={faHeart} className="text-red-500" /> and
        <FontAwesomeIcon icon={faReact} className="text-blue-400 ml-1" />
      </p>
    </footer>
  );
}