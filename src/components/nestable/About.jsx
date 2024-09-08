export default function About({ blok }) {
  return (
    <section className="py-12 px-6 md:px-16  text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{blok.title}</h1>
        <p className="text-lg text-gray-700 mb-8">{blok.about}</p>

        {blok.image && (
          <div className="mb-8">
            <img
              src={blok.image.filename}
              alt={blok.image.alt || "About image"}
              className="w-full h-auto mx-auto rounded-lg shadow-lg"
            />
          </div>
        )}

        <p className="text-md text-gray-600">{blok.extraInfo}</p>
      </div>
    </section>
  );
}
