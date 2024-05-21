"use client";

import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import August from "./Pages/August";
import Octave from "./Pages/Ovtave";
import NoPage from "./Pages/NoPage";
import {useMediaDimentionQuery} from "./hooks/useMediaDimentonQuery";
import NotSupportedScreen from "./Pages/NotSupportedScreen";
import ScrollToTop from "./hooks/ScrollToTOp";


const RootHistory = ()=>{
    return(
        <>
        <BrowserRouter>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route index path={'/August'} element={<August />} />
                <Route index path={'/Octave'} element={<Octave />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
        </>

    )
}



export default function App() {
    const {isMd } = useMediaDimentionQuery()
    const notSupported = !isMd;
    return notSupported ? <NotSupportedScreen /> :<RootHistory/>;
}
