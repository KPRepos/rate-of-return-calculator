import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Tools from './Tools';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/tools">Tools</Link>
          <Link to="/about">About</Link>
          <Link to="/archive">Archive</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          {/* Add other routes for different sections here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
