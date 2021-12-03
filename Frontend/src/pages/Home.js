import React from "react";
import Hero from "../components/Hero";
import { CategoryPreviewMin } from "../components/_home/Category-preview-min";
import { CategoryPreviewMax } from "../components/_home/Category-preview-max";

function Home() {
  return (
    <>
      <Hero />
      <CategoryPreviewMin />
      <CategoryPreviewMax />
    </>
  );
}

export default Home;
