"use client";


import {useMediaQuery} from "../hooks/useMediaQuery";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../Pages/Home";
import August from "../Pages/August";
import Octave from "../Pages/Ovtave";
import NoPage from "../Pages/NoPage";


const RootHistory = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route index path={'/August'} element={<August />} />
                <Route index path={'/Octave'} element={<Octave />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>

    )
}



export default function BrowserLayoutWrapper() {
    const notSupported = useMediaQuery("only screen and (max-width : 1023px)");
    return notSupported ? <div style={{width:100, height:100, backgroundColor:'green'}} /> :<RootHistory/>;
}
