import './All.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar.js';
import About from './pages/About.js';
import Home from './pages/Home.js';
import History from './pages/History.js';

import RavelrySearch from "./Util.js";

function App() {

return (
    <div className="App">
 <Router>
        <header>
            <Navbar />
        </header>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/about'} element={<About />} />
          <Route path={'/history'} element={<History />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
