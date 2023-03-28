import './App.css';
import Footer from './common/Footer';
import NavBar from './common/NavBar';
import DiscoverMore from './components/DiscoverMore';
import HeroSection from './components/HeroSection';
import NFTArtArrival from './components/NFTArtArrival';
import TopCollections from './components/TopCollections';

function App() {
  return (
 <>
 <NavBar/>
 <HeroSection/>
 <NFTArtArrival />
 <TopCollections />
 <DiscoverMore/>
 <Footer />
 </>
  );
}

export default App;
