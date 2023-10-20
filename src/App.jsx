// import { useState } from 'react'
import './App.css';
import AboutMe from './Pages/About/About';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <header className='header'>
        <Header />
      </header>
      <main className='about-me'>
        <AboutMe />
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </>
  );
}

export default App
