import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import  { Navbar } from './components/Navbar/Navbar'
import { Intro } from './components/Intro/Intro'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'
import { AllProjs } from './projectPage/AllProjs';  

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <>
                        <Navbar />
                        <Intro />
                        <About />
                        <Experience />
                        <Projects />
                        <Contact />
                    </>
                } />
                <Route path="/AllProjs" element={<AllProjs />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;