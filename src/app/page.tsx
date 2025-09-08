import Navbar from "././components/Navbar";
import Hero from "./components/Hero";
import MarqueeGallery from "./components/MarqueeGallery";
import About from "./components/About";
import ShishaCards from "./components/ShishaCards";
import Drinks from "./components/Drinks";
import Contact from "./components/Contact";
import Location from "./components/Location";
import HoChiMinhSection from "./components/HoChiMinhSection";
import HoChiMinhAbout from "./components/HoChiMinhAbout";
import HoChiMinhShishaCards from "./components/HoChiMinhShishaCards";
import HoChiMinhDrinks from "./components/HoChiMinhDrinks";
import HoChiMinhContact from "./components/HoChiMinhContact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Location />
      <MarqueeGallery />
      <About />
      <ShishaCards />
      <Drinks />
      <Contact />
      <HoChiMinhSection />
      <HoChiMinhAbout />
      <HoChiMinhShishaCards />
      <HoChiMinhDrinks />
      <HoChiMinhContact />
    </div>
  );
}
