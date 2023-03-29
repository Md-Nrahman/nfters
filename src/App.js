import './App.css';
import Footer from './common/Footer';
import NavBar from './common/NavBar';
import CollectionFeaturedNFTS from './components/CollectionFeaturedNFTS';
import DiscoverMore from './components/DiscoverMore';
import HeroSection from './components/HeroSection';
import NFTArtArrival from './components/NFTArtArrival';
import SellYourNFTS from './components/SellYourNFTS';
import TopCollections from './components/TopCollections';

function App() {
  return (
 <>
 <NavBar/>
 <HeroSection/>
 <NFTArtArrival />
 <TopCollections />
 <CollectionFeaturedNFTS />
 <SellYourNFTS />
 <DiscoverMore/>
 <Footer />
 </>
  );
}

export default App;
