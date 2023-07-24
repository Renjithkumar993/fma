import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import AboutUs from './components/AboutUs';
import FollowUs from './components/FollowUs';
import Footer from './components/Footer';
import WhyFMA from './components/WhyFMA';
import Testimonials from './components/Testimonials';
import ComponentWithBackground from './components/ComponentWithBackground';
import LatestNews from './components/LatestNews';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <FollowUs />
      <Footer />
    </Router>
  );
}

function Home() {
  return (
    <>
      <Main />
      <WhyFMA />
      <AboutUs />
      <ComponentWithBackground />
      <LatestNews />
      <Testimonials />
    </>
  );
}

export default App;
