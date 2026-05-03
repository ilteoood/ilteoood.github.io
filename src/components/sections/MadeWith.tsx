import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';

export default function MadeWith() {
  return (
    <footer className="py-12 px-6 bg-[#0a0a0b] border-t border-[#27272a]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left - Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
            <span className="text-sm text-[#52525b]">
              {new Date().getFullYear()} Matteo Pietro Dazzi
            </span>
          </div>

          {/* Center - Made with */}
          <p className="flex items-center gap-3 text-sm text-[#52525b]">
            <span>Crafted with</span>
            <FontAwesomeIcon icon={faHeart} className="text-[#38bdf8] text-xs" />
            <span>and</span>
            <span className="text-[#61dafb] font-mono text-xs">React</span>
          </p>

          {/* Right - Back to top */}
          <a
            href="#describe-me"
            className="group flex items-center gap-2 text-xs text-[#52525b] hover:text-[#fafaf9] transition-colors duration-300 uppercase tracking-wider"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('describe-me');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Back to top
            <svg
              className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}