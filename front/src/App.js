import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import Header from "./components/Header/Navbar";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      ,
    </Fragment>
  );
}

export default App;
