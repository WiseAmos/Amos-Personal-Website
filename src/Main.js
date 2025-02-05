import './Main.css';
import React, { useState, useEffect } from 'react';
import Home from './pages/home/App';
import Loading from './components/loading/loading.js';
import ReactDOM from "react-dom/client";
import Projects from './pages/projects/projects.js';
import Resume from './pages/resume/resume.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './pages/contacts/contact.js';

const App = () => {

return(
    <BrowserRouter>
<Routes>
    <Route path="/" element={
        <div className='Main'><Loading />
    <Home /></div>} />
    <Route path='/projects' element={<Projects />}/>
    <Route path='/resume' element={<Resume />}/>
    <Route path='/contact' element={<Contact/>}/>
</Routes>
    </BrowserRouter>)
}

export default App;