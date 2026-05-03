import { useState, useEffect } from 'react';

export default function Introduction() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="introduction"
      className="min-h-screen flex items-center py-20 px-6 relative"
    >
      {/* Large background text */}
      <div
        className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <span
          className="text-[18vw] font-bold text-[#111113] select-none"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Profile
        </span>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            {/* Decorative frame */}
            <div className="absolute -inset-4 border border-[#27272a] rounded-lg" />
            <div
              className="absolute -inset-2 border border-[#1f1f23] rounded-lg transform rotate-3"
              aria-hidden="true"
            />

            {/* Image container */}
            <div className="relative aspect-square overflow-hidden rounded-lg bg-[#18181b]">
              <img
                src="https://av.githubusercontent.com/u/6383527?v=4"
                alt="Diego Rucci"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#18181b] border border-[#27272a] rounded-lg px-4 py-3">
              <p className="text-xs text-[#52525b] uppercase tracking-wider mb-1">Status</p>
              <p className="text-sm text-[#22c55e] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                Available for work
              </p>
            </div>
          </div>

          {/* Content side */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            {/* Section label */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs tracking-[0.3em] uppercase text-[#ef4444]">
                Introduction
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-[#27272a] to-transparent" />
            </div>

            {/* Quote */}
            <blockquote
              className="text-2xl sm:text-3xl lg:text-4xl leading-relaxed mb-8"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              <span className="text-[#52525b]">"</span>
              <span className="text-[#fafaf9]">
                I&apos;m looking for something that never makes me stop keeping up with the future.
              </span>
              <span className="text-[#52525b]">"</span>
            </blockquote>

            {/* Divider */}
            <div className="flex items-center gap-6 mb-6">
              <div className="w-12 h-px bg-[#27272a]" />
              <div className="w-2 h-2 rounded-full bg-[#ef4444]" />
            </div>

            {/* Caption */}
            <div className="mb-8">
              <p
                className="text-lg font-semibold text-[#fafaf9] mb-1"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Diego Rucci
              </p>
              <a
                href="https://telegram.me/iLTeoooD"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#52525b] hover:text-[#ef4444] transition-colors duration-300"
              >
                @iLTeoooD
              </a>
            </div>

            {/* Bio */}
            <p className="text-[#a1a1aa] leading-relaxed mb-8 max-w-lg">
              Software engineer specializing in modern web technologies. Passionate about creating
              elegant solutions and continuous learning. Currently crafting digital experiences at
              NearForm.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#27272a]">
              <div>
                <p
                  className="text-2xl sm:text-3xl font-bold text-[#fafaf9] mb-1"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  5+
                </p>
                <p className="text-xs text-[#52525b] uppercase tracking-wider">Years Exp.</p>
              </div>
              <div>
                <p
                  className="text-2xl sm:text-3xl font-bold text-[#fafaf9] mb-1"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  50+
                </p>
                <p className="text-xs text-[#52525b] uppercase tracking-wider">Projects</p>
              </div>
              <div>
                <p
                  className="text-2xl sm:text-3xl font-bold text-[#fafaf9] mb-1"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Italy
                </p>
                <p className="text-xs text-[#52525b] uppercase tracking-wider">Location</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}