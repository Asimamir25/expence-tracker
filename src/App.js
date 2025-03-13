import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import ExpenceCard from "./components/ExpenceCard";
import ExpenceTrack from "./components/ExpenceTrack.jsx/ExpenceTrack";

function App() {
  return (
    <>
      <Navbar />
      <ExpenceCard />
      <ExpenceTrack />
    </>
  );
}

export default App;
