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

export default function Contacts() {
  const contacts = [
    { icon: faMedium, url: 'https://medium.com/@diego.rucci', color: 'hover:text-gray-400' },
    { icon: faLinkedin, url: 'https://www.linkedin.com/in/diego-rucci/', color: 'hover:text-[#0e76a8]' },
    { icon: faGithub, url: 'https://github.com/ilteoood', color: 'hover:text-gray-200' },
    { icon: faEnvelope, url: 'mailto:diego.rucci@gmail.com', color: 'hover:text-red-400' },
    { icon: faTelegram, url: 'https://t.me/iLTeoooD', color: 'hover:text-[#0088cc]' },
    { icon: faFacebook, url: 'https://www.facebook.com/diego.rucci.1/', color: 'hover:text-[#3b5998]' },
    {
      icon: faInstagram,
      url: 'https://instagram.com/diego_rucci?igsh=MWdydnl4NW1pbXBzYw==',
      color: 'hover:text-pink-400',
      isInstagram: true,
    },
  ];

  return (
    <section
      id="contacts"
      className="min-h-screen flex items-center justify-center px-10 md:px-20 xl:px-40"
    >
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-100">Contacts</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-4xl text-gray-400 transition-colors ${contact.color}`}
            >
              <FontAwesomeIcon icon={contact.icon} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}