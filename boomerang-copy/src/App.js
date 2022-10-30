import "./App.css";
import Benefits from "./components/Benefits";
import Header from "./components/Header";
import HowItWorks from "./components/HowItWorks";
import Top from "./components/Top";

function App() {
  return (
    <div className="App">
      <Header />
      <Top />
      <Benefits />
      <HowItWorks />
    </div>
  );
}

export default App;
