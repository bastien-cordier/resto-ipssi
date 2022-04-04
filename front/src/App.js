import { Fragment } from "react";
import "./App.scss";

import Navbar from "./components/Header/Navbar";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      ,
    </Fragment>
  );
}

export default App;
