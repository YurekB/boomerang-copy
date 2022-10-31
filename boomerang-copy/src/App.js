import "./App.css";
import AllYouNeed from "./components/AllYouNeed";
import Benefits from "./components/Benefits";
import ExtraBenefits from "./components/ExtraBenefits";
import Header from "./components/Header";
import HowItWorks from "./components/HowItWorks";
import Top from "./components/Top";
import Taxis from "./components/Taxis";
import Compliance from "./components/Compliance";
import Reviews from "./components/Reviews";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Top />
      <Benefits />
      <HowItWorks />
      <ExtraBenefits />
      <AllYouNeed />
      <Taxis />
      <Compliance />
      <Reviews />
      <FAQs />
      <Footer />
    </div>
  );
}

export default App;
