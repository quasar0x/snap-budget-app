import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Budget from './pages/Budget';
import Expenses from './pages/Expenses';
import Visualization from './pages/Visualization';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/visualization" element={<Visualization />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
