import TypeWriter from '../TypeWriter';

const phrases = [
  'Software Engineer',
  'Tech Enthusiast',
  'Music Addicted',
  'Problem Solver',
];

export default function DescribeMe() {
  return (
    <section
      id="describe-me"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-8 w-px h-32 bg-gradient-to-b from-transparent via-[#27272a] to-transparent opacity-50" />
      <div className="absolute top-1/3 right-12 w-px h-48 bg-gradient-to-b from-transparent via-[#27272a] to-transparent opacity-30" />
      <div className="absolute bottom-1/4 left-1/4 w-24 h-px bg-gradient-to-r from-transparent via-[#27272a] to-transparent opacity-40" />

      {/* Large background number */}
      <div
        className="absolute text-[20vw] font-bold text-[#18181b] select-none pointer-events-none"
        aria-hidden="true"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        01
      </div>

      <div className="relative z-10 text-center max-w-4xl">
        {/* Eyebrow */}
        <p
          className="text-xs tracking-[0.4em] uppercase text-[#38bdf8] mb-6"
          style={{ animation: 'fadeIn 1s ease-out forwards' }}
        >
          Portfolio
        </p>

        {/* Main headline */}
        <h1
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none"
          style={{
            fontFamily: 'Playfair Display, serif',
            animation: 'fadeInUp 1s ease-out forwards',
            animationDelay: '200ms',
            opacity: 0,
          }}
        >
          <span className="text-[#fafaf9]">Matteo </span>
          <span className="text-[#fafaf9]">Dazzi</span>
        </h1>

        {/* Typewriter */}
        <div
          className="h-16 sm:h-20 md:h-24 flex items-center justify-center mb-8"
          style={{
            animation: 'fadeInUp 1s ease-out forwards',
            animationDelay: '400ms',
            opacity: 0,
          }}
        >
          <TypeWriter
            phrases={phrases}
            typingSpeed={70}
            deletingSpeed={35}
            pauseDuration={2500}
            className="text-xl sm:text-3xl md:text-4xl text-[#a1a1aa] font-mono"
          />
        </div>

        {/* Tagline */}
        <p
          className="text-sm sm:text-base text-[#52525b] max-w-md mx-auto px-4"
          style={{
            animation: 'fadeInUp 1s ease-out forwards',
            animationDelay: '600ms',
            opacity: 0,
          }}
        >
          Crafting digital experiences with precision and passion.
          Based in Milan, Italy.
        </p>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          style={{
            animation: 'fadeIn 1s ease-out forwards',
            animationDelay: '1s',
            opacity: 0,
          }}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#52525b]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#52525b] to-transparent" />
        </div>
      </div>
    </section>
  );
}