import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import SecurityNotice from './components/layout/SecurityNotice';
import Homepage from './pages/Homepage';
import Studio from './pages/Studio';
import Gallery from './pages/Gallery';
import Artists from './pages/Artists';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import Success from './pages/Success';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-950 text-white overflow-x-hidden">
        <div className="fixed inset-0 bg-gradient-radial from-primary-500/5 via-transparent to-transparent pointer-events-none" />
        
        <SecurityNotice />
        <Navigation />
        
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </motion.main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;