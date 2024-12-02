import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PopularDishes from "./components/PopularDishes";
import Partners from "./components/Partner";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PopularDishes />
      <Partners />
    </div>
  );
}

export default App;
