import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Heroes from "./components/Heroes.page";
import Home from "./components/Home.page";
import Navbar from "./components/Navbar";
import RQHeroes from "./components/RQHeroes.page";
import RQHero from "./components/RQHero.page";
import ParallelPage from "./components/Parallel.page";
import DynamicParallel from "./components/DynamicParallel.page";
import DependentQueriesPage from "./components/DependentQueries.page";
import PaginatedQueries from "./components/PaginatedQueries";
import InfiniteQuery from "./components/InfiniteQueries.page";


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
        <Route
          path="/dynamic-parallel"
          element={<DynamicParallel heroId={[3, 5]} />}
        />
        <Route path="/dependent-queries" element={<DependentQueriesPage email={"beluga@discord.com"} />} />
        <Route path="/colors" element={<PaginatedQueries />} />
        <Route path="/infinite-colors" element={<InfiniteQuery />} />
      </Routes>
    </Router>
  );
}

export default App;
