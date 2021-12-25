import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<div>Root</div>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
