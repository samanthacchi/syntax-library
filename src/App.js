import React, { Component } from 'react';
import Header from './Header';
import LanguageToggle from './LanguageToggle';
import DisplaySection from './DisplaySection';
import Footer from "./Footer";
import './styles/App.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <LanguageToggle />
      <DisplaySection />
      <Footer />
    </div>
  );
};
