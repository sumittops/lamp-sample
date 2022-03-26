import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import DonutDemo from './DonutDemo';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/donut" element={<DonutDemo />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
