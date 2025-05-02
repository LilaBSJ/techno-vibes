import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import NavigationBar from './components/NavigationBar';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <NavigationBar />
      </div>
    </Router>
  );
}

export default App;
