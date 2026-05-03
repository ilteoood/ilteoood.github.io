import { useState, useEffect } from 'react';

interface NavBarProps {
  sections: { id: string; label: string }[];
}

export default function NavBar({ sections }: NavBarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const sectionIds = sections.map(s => s.id);
      for (const id of sectionIds.reverse()) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0a0b]/90 backdrop-blur-md border-b border-[#27272a]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#ef4444] animate-pulse" />
            <span className="text-sm text-[#a1a1aa] tracking-widest uppercase font-mono">
              DR
            </span>
          </div>

          <div className="flex items-center gap-1">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`relative px-5 py-2 text-xs tracking-wider uppercase font-mono transition-all duration-300 group`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeIn 0.6s ease-out forwards',
                }}
              >
                <span
                  className={`transition-colors duration-300 ${
                    activeSection === section.id
                      ? 'text-[#fafaf9]'
                      : 'text-[#52525b] hover:text-[#a1a1aa]'
                  }`}
                >
                  {section.label}
                </span>
                <span
                  className={`absolute bottom-1 left-5 right-5 h-px bg-[#ef4444] transition-transform duration-300 origin-left ${
                    activeSection === section.id
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-50'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}