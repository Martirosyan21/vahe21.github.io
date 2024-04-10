import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import reportWebVitals from './reportWebVitals';

import Home from "./Pages/Home";
import NoPage from "./Pages/NoPage";
import August from "./Pages/August";
import Octave from "./Pages/Ovtave";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes >
            <Route path="/" element={<Home />} />
            <Route index path={'/August'} element={<August />} />
            <Route index path={'/Octave'} element={<Octave />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    </BrowserRouter>
);

reportWebVitals();
