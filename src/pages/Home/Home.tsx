import Hero from "../../components/home/Hero";
import SearchBar from "../../components/home/SearchBar";
import FeaturedProperties from "../../components/home/FeaturedProperties";
import Services from "../../components/home/Services";
function Home() {
  return (
    <>
      <Hero />
      <SearchBar />
      <FeaturedProperties />
      <Services />
    </>
  );
}

export default Home;