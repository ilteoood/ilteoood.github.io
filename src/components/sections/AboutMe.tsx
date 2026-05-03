export default function AboutMe() {
  return (
    <section
      id="about-me"
      className="min-h-screen flex items-center justify-center px-10 md:px-20 xl:px-40"
    >
      <div className="max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">About Me</h2>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          I am a software engineer based in Milan, Italy. I studied Computer Science at the University of Milan.
          Currently working at NearForm, where I continue to grow as a developer.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          I am a passionate developer, always looking for new technologies to learn and new challenges to face.
          I have experience with a wide range of technologies, from frontend to backend, from mobile to desktop.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a
            href="https://www.unimi.it/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
          >
            University of Milan
          </a>
          <a
            href="https://www.nearform.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
          >
            NearForm
          </a>
          <a
            href="#"
            className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}