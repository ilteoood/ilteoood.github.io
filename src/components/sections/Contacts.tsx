import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMedium,
  faLinkedin,
  faGithub,
  faTelegram,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

interface ContactItem {
  icon: any;
  url: string;
}

export default function Contacts() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const contacts: ContactItem[] = [
    { icon: faMedium, url: 'https://ilteoood.medium.com/' },
    { icon: faLinkedin, url: 'https://www.linkedin.com/in/ilteoood/' },
    { icon: faGithub, url: 'https://github.com/ilteoood/' },
    { icon: faEnvelope, url: 'mailto:matteopietro.dazzi@gmail.com' },
    { icon: faTelegram, url: 'https://telegram.me/iLTeoooD' },
    { icon: faFacebook, url: 'https://facebook.com/iLTeoooD' },
    { icon: faInstagram, url: 'https://www.instagram.com/_ilteoood' },
  ];

  return (
    <section
      id="contacts"
      className="min-h-screen py-24 px-6 relative overflow-hidden flex items-center"
    >
      {/* Background number */}
      <div
        className="absolute text-[20vw] font-bold text-[#111113] select-none pointer-events-none"
        aria-hidden="true"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        04
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-6 mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-[#38bdf8]">
            Connect
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
            <span className="text-[#fafaf9]">Let's </span>
            <span className="text-[#38bdf8]">Talk</span>
          </h2>
          <p className="text-[#a1a1aa] max-w-xl">
            Have a project in mind or just want to say hello? Feel free to reach out.
            I'm always open to discussing new opportunities and ideas.
          </p>
        </div>

        {/* Contact icons */}
        <div
          className={`flex flex-wrap justify-center gap-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-[#52525b] hover:text-[#38bdf8] transition-all duration-300 hover:scale-110"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
              aria-label={contact.url}
            >
              <FontAwesomeIcon icon={contact.icon} />
            </a>
          ))}
        </div>

        {/* Direct email CTA */}
        <div
          className={`mt-16 p-8 bg-[#18181b] border border-[#27272a] rounded-xl text-center transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[#52525b] text-sm mb-4">Prefer email?</p>
          <a
            href="mailto:matteopietro.dazzi@gmail.com"
            className="text-2xl sm:text-3xl text-[#fafaf9] hover:text-[#38bdf8] transition-colors duration-300"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            matteopietro.dazzi@gmail.com
          </a>
        </div>

        {/* Decorative line */}
        <div className="flex items-center justify-center mt-16 gap-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#27272a] to-transparent" />
          <div className="w-2 h-2 bg-[#38bdf8] rounded-full animate-pulse" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#27272a] to-transparent" />
        </div>
      </div>
    </section>
  );
}
