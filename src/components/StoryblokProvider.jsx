"use client";

import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "./Page";
import Teaser from "./Teaser";

const components = {
  page: Page,
  teaser: Teaser,
};

storyblokInit({
  accessToken: process.env.STORYBLOK_PREVIEW_TOKEN,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  return <>{children}</>;
}
