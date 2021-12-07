import React from "react";
import Hero from "../components/Hero";
import { CategoryPreviewMin } from "../components/_home/Category-preview-min";
import { CategoryPreviewMax } from "../components/_home/Category-preview-max";

function Home() {
  window.scrollTo(0, 0);
  return (
    <>
      <Hero />
      <CategoryPreviewMin />
      <CategoryPreviewMax />
    </>
  );
}

export default Home;
