import Link from "next/link";
import Image from "next/image";

export default function Footer({ blok }) {
  console.log(blok);
  return (
    <footer className="overflow-auto bg-gray-100 py-8  min-h-[400px] p-10 ">
      <div className="container mx-auto px-4 max-w-screen-xl flex justify-between items-start ">
        <div>
          <h2 className="text-2xl font-bold mb-4 mt-[20%]">{blok.title}</h2>
          <p className="mb-4 max-w-[400px]">{blok.description}</p>{" "}
        </div>
        {blok.link && (
          <Link
            href={blok.link.cached_url}
            className="text-blue-500 hover:underline"
          >
            {blok.image && (
              <Image
                src={blok.image.filename}
                alt={"Halloween map"}
                layout="responsive"
                width={100}
                height={50}
                className="w-full h-auto mt-4 max-w-xs min-w-[200px]"
              />
            )}
          </Link>
        )}
      </div>
    </footer>
  );
}
