
import './bootstrap';
import '../css/app.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useLocation
} from 'react-router-dom';


import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Projects from './pages/Projects.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
    return (
        <Router>
            <Navbar />
            <div className="pt-20 min-h-screen bg-gray-50">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </div>
            <footer className="bg-white border-t border-gray-200 w-full text-center py-4">
                <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Strider. All rights reserved.</p>
            </footer>
        </Router>
    );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
