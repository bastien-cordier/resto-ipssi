import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";
import Commander from "./pages/Commander";
import Inscription from "./pages/login/Inscription";
import Connexion from "./pages/login/Connexion";

import Backoffice from "./pages/admin/Backoffice";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/notre-restaurant" element={<Restaurant/>} />
          <Route path="/commander" element={<Commander/>} />

          <Route path="/inscription" element={<Inscription/>} />
          <Route path="/connexion" element={<Connexion/>} />

          <Route path="/backoffice" element={<Backoffice/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
