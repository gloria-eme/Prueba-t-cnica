import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import NotFound from './pages/404';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="series" element={<Series />} />
          {/* <Route path="series/:id" element={<Serie />} /> */}
          <Route path="movies" element={<Movies />} />
          {/* <Route path="movies/:id" element={<Movie />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
