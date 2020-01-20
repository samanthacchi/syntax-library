import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import LanguageToggle from './LanguageToggle';
import DisplaySection from './DisplaySection';
import Footer from "./Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <LanguageToggle />
      <DisplaySection />
      <Footer />
    </div>
  );
}

export default App;
