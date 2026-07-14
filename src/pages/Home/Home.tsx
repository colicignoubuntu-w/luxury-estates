import Hero from "../../components/home/Hero";
import SearchBar from "../../components/home/SearchBar";
import FeaturedProperties from "../../components/home/FeaturedProperties";
import Services from "../../components/home/Services";
import AboutSection from "../../components/home/AboutSection";
function Home() {
  return (
    <>
      <Hero />
      <SearchBar />
      <FeaturedProperties />
      <Services />
      <AboutSection />
    </>
  );
}

export default Home;