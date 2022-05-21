import React from 'react';
import Navigation from './components/Navigation';
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navigation/>
    <main>
      <About/>
      <Technologies/>
      <Projects/>
    </main>
    <Footer/>
    </>
  );
}

export default App;
