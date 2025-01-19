import './Main.css';
import React, { useState, useEffect } from 'react';
import Home from './pages/home/App';
import Loading from './components/loading/loading.js';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

return(
    <BrowserRouter>
<Routes>
    <Route path="/" element={
        <div className='Main'><Loading />
    <Home /></div>} />
    <Route path='/projects' element={<div><h1>projects</h1></div>}/>
    <Route path='/resume' element={<div><h1>projects</h1></div>}/>
    <Route path='/contact' element={<div><h1>projects</h1></div>}/>
</Routes>
    </BrowserRouter>)
}

export default App;