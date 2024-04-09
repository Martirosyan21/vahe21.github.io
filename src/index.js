import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import reportWebVitals from './reportWebVitals';

import Home from "./Pages/Home";
import Octave from "./Pages/Ovtave";
import NoPage from "./Pages/NoPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes >
            <Route path="/" element={<Home />} />
            <Route index path={'/Octave'} element={<Octave />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    </BrowserRouter>
);

reportWebVitals();
