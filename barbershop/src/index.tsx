import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, BrowserRouter as Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import Reservation from './pages/Reservation';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/reservation" element={<Reservation/>} />
        </Routes>
      </HashRouter>
    </React.StrictMode>
  );

  reportWebVitals();
} else {
  console.error('Root element not found');
}