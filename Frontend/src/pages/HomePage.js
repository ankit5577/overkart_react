import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Rating from "../components/Rating";
import { CategoryPreviewMax } from "../components/_home/CategoryPreviewMax";
import { CategoryPreviewMin } from "../components/_home/CategoryPreviewMin";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <>
      <Hero />
      <Rating></Rating>
      <CategoryPreviewMax />
      <CategoryPreviewMin />
    </>
  );
}

export default Home;
