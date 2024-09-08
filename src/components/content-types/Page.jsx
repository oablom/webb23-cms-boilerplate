import { useState, useEffect } from "react";
import { StoryblokComponent } from "@storyblok/react/rsc";
import "@/components/styling/index.css";

// Content-type component (acts as template for all pages)
export default function Page({ blok }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (blok) {
      setIsLoading(false);
    }
  }, [blok]);

  if (isLoading) {
    return <div className="text-center py-10">Loading page...</div>;
  }

  return (
    <main className="flex flex-col">
      {blok?.body?.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </main>
  );
}
