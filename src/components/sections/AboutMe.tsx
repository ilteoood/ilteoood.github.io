export default function AboutMe() {
  return (
    <section
      id="about-me"
      className="min-h-screen py-24 px-6 relative overflow-hidden"
    >
      {/* Background number */}
      <div
        className="absolute text-[20vw] font-bold text-[#111113] select-none pointer-events-none"
        aria-hidden="true"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        02
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-6 mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-[#ef4444]">
            About
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#27272a] to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column - Headline */}
          <div>
            <h2
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              <span className="text-[#fafaf9]">The </span>
              <span className="text-[#ef4444]">Story</span>
              <br />
              <span className="text-[#fafaf9]">Behind</span>
            </h2>

            {/* Decorative element */}
            <div className="relative w-24 h-24 mb-8">
              <div className="absolute inset-0 border border-[#27272a] rounded-full" />
              <div
                className="absolute inset-4 border border-[#ef4444] rounded-full"
                style={{ animation: 'spin 20s linear infinite' }}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#ef4444] rounded-full" />
            </div>
          </div>

          {/* Right column - Content */}
          <div className="space-y-8">
            <div className="relative pl-8 border-l border-[#27272a]">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-[#18181b] border-2 border-[#ef4444] rounded-full" />
              <p className="text-[#a1a1aa] leading-relaxed">
                Based in Milan, Italy, I studied Computer Science at the University of Milan.
                My journey in tech is driven by curiosity and a relentless desire to build
                meaningful things.
              </p>
            </div>

            <div className="relative pl-8 border-l border-[#27272a]">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-[#18181b] border-2 border-[#f59e0b] rounded-full" />
              <p className="text-[#a1a1aa] leading-relaxed">
                Currently working at Nearform, where I collaborate with talented teams on
                projects that push the boundaries of what's possible on the web.
              </p>
            </div>

            <div className="relative pl-8 border-l border-[#27272a]">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-[#18181b] border-2 border-[#52525b] rounded-full" />
              <p className="text-[#a1a1aa] leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing
                to open source, or immersed in music. Every project is an opportunity to
                learn something new.
              </p>
            </div>

            {/* Tech tags */}
            <div className="pt-8">
              <p className="text-xs tracking-[0.3em] uppercase text-[#52525b] mb-4">
                Expertise
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  'JavaScript',
                  'TypeScript',
                  'React',
                  'Node.js',
                  'Frontend',
                  'Backend',
                  'Mobile',
                  'DevOps',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-[#18181b] border border-[#27272a] rounded-lg text-sm text-[#a1a1aa] hover:border-[#ef4444] hover:text-[#fafaf9] transition-colors duration-300 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 pt-8 border-t border-[#27272a]">
              <a
                href="https://www.unimi.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-4 bg-[#18181b] border border-[#27272a] rounded-lg hover:border-[#ef4444] transition-all duration-300"
              >
                <span className="text-sm text-[#a1a1aa] group-hover:text-[#fafaf9]">
                  University of Milan
                </span>
                <svg
                  className="w-4 h-4 text-[#52525b] group-hover:text-[#ef4444] transition-colors"
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
              </a>
              <a
                href="https://www.nearform.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-4 bg-[#18181b] border border-[#27272a] rounded-lg hover:border-[#ef4444] transition-all duration-300"
              >
                <span className="text-sm text-[#a1a1aa] group-hover:text-[#fafaf9]">
                  NearForm
                </span>
                <svg
                  className="w-4 h-4 text-[#52525b] group-hover:text-[#ef4444] transition-colors"
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
              </a>
              <a
                href="#"
                className="group flex items-center gap-3 px-6 py-4 bg-[#ef4444] rounded-lg hover:bg-[#dc2626] transition-colors duration-300"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="text-sm text-white font-medium">Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}