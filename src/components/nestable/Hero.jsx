"use client";

import { useEffect } from "react";

export default function Hero({ blok }) {
  useEffect(() => {
    console.log("Blok data:", blok);
  }, [blok]);

  return (
    <section>
      <h1>{blok.heading}</h1>
      <p>{blok.description}</p>
      {button && <a href={button.url}>{blok.button}</a>}
      {image && <img src={blok.image} alt={image.alt} />}
    </section>
  );
}
