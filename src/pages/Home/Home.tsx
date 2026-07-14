import Hero from "../../components/home/Hero";
import SearchBar from "../../components/home/SearchBar";
import FeaturedProperties from "../../components/home/FeaturedProperties";
import Services from "../../components/home/Services";
import AboutSection from "../../components/home/AboutSection";
import Testimonials from "../../components/home/Testimonials";
import CTA from "../../components/home/CTA";

function Home() {
  return (
    <>
      <Hero />
      <SearchBar />
      <FeaturedProperties />
      <Services />
      <AboutSection />
      <Testimonials />
      <CTA />
    </>
  );
}

export default Home;