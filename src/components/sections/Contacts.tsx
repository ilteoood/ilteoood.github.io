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
  bgColor: string;
  hoverColor: string;
}

export default function Contacts() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const contacts: ContactItem[] = [
    { icon: faMedium, url: 'https://ilteoood.medium.com/', bgColor: '#000000', hoverColor: '#ffffff' },
    { icon: faLinkedin, url: 'https://www.linkedin.com/in/ilteoood/', bgColor: '#0A66C2', hoverColor: '#ffffff' },
    { icon: faGithub, url: 'https://github.com/ilteoood/', bgColor: '#333333', hoverColor: '#ffffff' },
    { icon: faEnvelope, url: 'mailto:matteopietro.dazzi@gmail.com', bgColor: '#EA4335', hoverColor: '#ffffff' },
    { icon: faTelegram, url: 'https://telegram.me/iLTeoooD', bgColor: '#0088CC', hoverColor: '#ffffff' },
    { icon: faFacebook, url: 'https://facebook.com/iLTeoooD', bgColor: '#1877F2', hoverColor: '#ffffff' },
    { icon: faInstagram, url: 'https://www.instagram.com/_ilteoood', bgColor: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', hoverColor: '#ffffff' },
  ];

  return (
    <section
      id="contacts"
      className="min-h-screen py-24 px-6 relative overflow-hidden flex items-center"
    >
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
          className={`flex flex-wrap justify-center gap-6 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                background: contact.bgColor,
                animationDelay: `${index * 100}ms`,
              }}
              aria-label={contact.url}
            >
              <FontAwesomeIcon
                icon={contact.icon}
                className="text-2xl text-white"
              />
            </a>
          ))}
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
