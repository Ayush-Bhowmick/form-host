import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import FormComponent from './FormComponent';
import Details from './Details';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<FormComponent />} />
          <Route path="/details" element={<Details />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
