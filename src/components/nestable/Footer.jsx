import { StoryblokComponent } from "@storyblok/react/rsc";

export default function Footer({ blok }) {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">{blok.title}</h2>
        <p className="mb-4">{blok.description}</p>
        {blok.link && (
          <a href={blok.link.url} className="text-blue-500 hover:underline">
            {blok.link.text}
          </a>
        )}
        {blok.image && (
          <img src={blok.image} alt={blok.title} className="mt-4 max-w-xs" />
        )}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">{blok.title2}</h3>
          <RichText document={blok.title2} />
        </div>
      </div>
    </footer>
  );
}
