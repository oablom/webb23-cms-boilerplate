"use client";

import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "@/components/content-types/Page";
import Teaser from "@/components/nestable/Teaser";
// import RichText from "@/components/nestable/RichText";
// import HeaderConfig from "@/components/HeaderConfig";
import Hero from "@/components/nestable/Hero";
import Footer from "@/components/nestable/Footer";

const components = {
  page: Page,
  teaser: Teaser,
  hero: Hero,
  // feature: Feature,
  // grid: Grid,
  // Config: HeaderConfig,
  footer: Footer,
  // ImageWithText: ImageWithText,
  // menu_links: MenuLinks,
};

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  return <>{children}</>;
}
