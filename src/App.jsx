import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Heroes from "./components/Heroes.page";
import Home from "./components/Home.page";
import Navbar from "./components/Navbar";
import RQHeroes from "./components/RQHeroes.page";
import RQHero from "./components/RQHero.page";
import ParallelPage from "./components/Paralle..page";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heroes" element={<Heroes />} />
        <Route path="/rq-heroes" element={<RQHeroes />} />
        <Route path="/rq-heroes/:heroId" element={<RQHero />} />
        <Route path="/parallel" element={<ParallelPage />} />
      </Routes>
    </Router>
  );
}

export default App;
