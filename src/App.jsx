import './App.css';
import "../src/pages/seriesmovies.css"

// import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';

// export const Context = createContext();

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
