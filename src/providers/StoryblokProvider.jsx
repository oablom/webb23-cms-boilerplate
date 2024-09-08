"use client";

import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "@/components/content-types/Page";
import Teaser from "@/components/nestable/Teaser";
import Hero from "@/components/nestable/Hero";
import Footer from "@/components/nestable/Footer";
import Header from "@/components/nestable/Header";
import Grid from "@/components/nestable/Grid";
import ImageWithText from "@/components/nestable/ImageWithText";
import About from "@/components/nestable/About";

const components = {
  page: Page,
  teaser: Teaser,
  hero: Hero,
  header: Header,
  footer: Footer,
  grid: Grid,
  image_with_text: ImageWithText,
  about: About,
};

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  return <>{children}</>;
}
