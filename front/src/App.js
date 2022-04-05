import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import Header from "./components/Header/Navbar";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";
import Commander from "./pages/Commander";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notre-restaurant" element={<Restaurant/>} />
          <Route path="/commander" element={<Commander/>} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
