"use client";
import Gallery from "./Gallery";
import Hero from "./Hero";
import Newsletter from "./Newsletter";
import PopularKeyboards from "./PopularKeyboards";
import RecentBlogs from "./RecentBlogs";
import WhyTypio from "./WhyTypio";

const Homepage = () => {
  return (
    <>
      <Hero />
      <WhyTypio />
      <RecentBlogs />
      <PopularKeyboards />
      <Gallery />
      <Newsletter />
    </>
  );
};
export default Homepage;
