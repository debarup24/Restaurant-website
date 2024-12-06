import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PopularDishes from "./components/PopularDishes";
import Partners from "./components/Partner";
import KeyFeatures from "./components/KeyFeatures";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PopularDishes />
      <Partners />
      <KeyFeatures />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
