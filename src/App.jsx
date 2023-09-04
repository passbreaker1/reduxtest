import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./Detail";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:id/:title/:comment" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
