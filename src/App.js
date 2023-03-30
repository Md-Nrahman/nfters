import { useEffect } from "react";
import "./App.css";
import Footer from "./common/Footer";
import NavBar from "./common/NavBar";
import CollectionFeaturedNFTS from "./components/CollectionFeaturedNFTS";
import DiscoverMore from "./components/DiscoverMore";
import HeroSection from "./components/HeroSection";
import NFTArtArrival from "./components/NFTArtArrival";
import SellYourNFTS from "./components/SellYourNFTS";
import TopCollections from "./components/TopCollections";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <NavBar />
      <HeroSection />
      <NFTArtArrival />
      <TopCollections />
      <CollectionFeaturedNFTS />
      <SellYourNFTS />
      <DiscoverMore />
      <Footer />
    </>
  );
}

export default App;
