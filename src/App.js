import './All.css';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar.js';
import About from './pages/About.js';
import Home from './pages/Home.js';
import History from './pages/History.js';
import Result from './pages/Result.js';
import Loading from './pages/Loading.js';

function App() {

  const [queryState, setQueryState] = useState("");

  useEffect(() => {
    let localQueryState = JSON.parse(localStorage.getItem("queryState"));
    if (!localQueryState) {
      localStorage.setItem("queryState", JSON.stringify([{"sort": "recently-popular"}]));
      setQueryState({"queryState": [{"sort": "recently-popular"}]});
    } else {
      setQueryState(localQueryState);
    }
  },[]);

return (
    <div className="App">
      <Router>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path={'/'} element={<Home queryState={queryState} setQueryState={setQueryState}/>} />
          <Route path={'/about'} element={<About />} />
          <Route path={'/history'} element={<History />} />
          <Route path={'loading'} element={<Loading />} />
          <Route path={'/result'} element={<Result />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
