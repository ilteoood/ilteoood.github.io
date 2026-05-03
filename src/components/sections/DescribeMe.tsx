import TypeWriter from '../TypeWriter';

const content = [
  { content: 'Software engineer', delay: 50 },
  { content: 'Tech enthusiast', delay: 50 },
  { content: 'Music addicted', delay: 50 },
];

export default function DescribeMe() {
  return (
    <section
      id="describe-me"
      className="min-h-screen flex items-center justify-center px-10 md:px-20 xl:px-40 pt-14"
    >
      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl xl:text-8xl font-bold mb-8">
          <TypeWriter
            content={content}
            cssClass="text-gray-100"
          />
        </h1>
      </div>
    </section>
  );
}