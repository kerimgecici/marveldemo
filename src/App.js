import React from 'react';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import './App.scss';
import 'antd/dist/antd.css';
import { Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="detail/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
