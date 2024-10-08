import Image from "next/image";

// import "@/components/styling/index.css";

export default function ImageWithText({ blok }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-8">
      <div className="md:w-1/2">
        <Image
          src={blok.image}
          alt={"Halloween picture"}
          layout="responsive"
          width={100}
          height={50}
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">{blok.h2}</h2>
        <p className="text-gray-700">{blok.description}</p>
      </div>
    </div>
  );
}
