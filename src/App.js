import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Surah from "./Surah";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/surah/:id" element={<Surah />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
