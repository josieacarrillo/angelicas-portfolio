import React from 'react';
import HomePage from './Pages/HomePage'
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './Pages/AboutPage'
import PortfolioPage from './Pages/PortfolioPage'
import ContactPage from './Pages/ContactPage'
import Navigation from './Components/Navigation';

function App() {
  return (
    <Router>
        <div className="App">
        <Navigation/>
            <div id="page-body">
               <Routes>
                 <Route path = "/" element= {<HomePage />} />
                 <Route path = "/about" element = {<AboutPage />} />
                 <Route path = "/contact" element = {<ContactPage />} />
                 <Route path = "/portfolio" element = {<PortfolioPage />} />
               </Routes>
            </div>
        </div>
       </Router>
  );
}

export default App;
