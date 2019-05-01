import React from 'react';
import './App.css';
import Header from "./components/Header";
import Section from "./components/Section";
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Section />
      <Counter />
    </div>
  );
}

export default App;
