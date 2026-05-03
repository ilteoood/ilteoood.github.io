export default function Introduction() {
  return (
    <section
      id="introduction"
      className="min-h-screen flex items-center justify-center px-10 md:px-20 xl:px-40"
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src="https://av.githubusercontent.com/ilteoood"
          alt="iLTeoooD"
          className="w-48 h-48 rounded-full object-cover border-4 border-gray-600"
        />
        <div className="text-center md:text-left">
          <blockquote className="text-xl md:text-2xl italic mb-4 text-gray-300">
            "Learning is a lifelong journey, and I'm enjoying every step of it."
          </blockquote>
          <p className="text-2xl md:text-3xl font-semibold text-gray-100">
            Diego Rucci
          </p>
          <a
            href="https://github.com/ilteoood"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition-colors mt-2 inline-block"
          >
            @iLTeoooD
          </a>
        </div>
      </div>
    </section>
  );
}