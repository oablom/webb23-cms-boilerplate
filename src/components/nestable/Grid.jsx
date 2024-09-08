"use client";

export default function ImageGrid({ blok }) {
  console.log(blok);
  return (
    <div className="flex flex-row flex-wrap justify-center gap-4 md:gap-8 lg:gap-20">
      {blok.columns.map((item) => (
        <div key={item._uid} className="flex flex-col items-center">
          <img
            src={item.image?.filename || "/placeholder.jpg"}
            alt={item.image?.alt || "Image"}
            className=" mt-4 max-w-xs"
          />
          <h2 className="text-2xl font-bold mb-1 mt-3">{item.h2}</h2>
          <p className="text-center">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
