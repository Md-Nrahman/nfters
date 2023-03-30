import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <HomeScreen />
    </>
  );
}

export default App;
