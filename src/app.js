"use client";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import August from "./Pages/August";
import Home from "./Pages/Home";
import NoPage from "./Pages/NoPage";
import NotSupportedScreen from "./Pages/NotSupportedScreen";
import Octave from "./Pages/Ovtave";
import Peertree from "./Pages/PeerTree";
import ScrollToTop from "./hooks/ScrollToTOp";
import { useMediaDimentionQuery } from "./hooks/useMediaDimentonQuery";

const RootHistory = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index path={"/August"} element={<August />} />
        <Route index path={"/PeerTree"} element={<Peertree />} />
        <Route index path={"/Octave"} element={<Octave />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default function App() {
  const { nonSupportedSize } = useMediaDimentionQuery();
  const notSupported = !nonSupportedSize;
  return notSupported ? <NotSupportedScreen /> : <RootHistory />;
}
