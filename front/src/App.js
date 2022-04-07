import { Fragment, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";

import Commander from "./pages/commande/Commander";
import Panier from "./pages/commande/Panier";
import FinishReserv from "./pages/commande/FinishReserv";

import Inscription from "./pages/login/Inscription";
import Connexion from "./pages/login/Connexion";

import Backoffice from "./pages/admin/Backoffice";

import BoCreateBoisson from "./pages/admin/boisson/BoCreateBoisson";
import BoGetBoissons from "./pages/admin/boisson/BoGetBoissons";
import BoEditBoisson from "./pages/admin/boisson/BoEditBoisson";

import BoCreatePlat from "./pages/admin/plat/BoCreatePlat";
import BoGetPlats from "./pages/admin/plat/BoGetPlats";
import BoEditPlat from "./pages/admin/plat/BoEditPlat";

import BoCreateTable from "./pages/admin/table/BoCreateTable";
import BoGetTables from "./pages/admin/table/BoGetTables";
import BoEditTable from "./pages/admin/table/BoEditTable";

import BoCreateUser from "./pages/admin/user/BoCreateUser";
import BoGetUsers from "./pages/admin/user/BoGetUsers";
import BoEditUser from "./pages/admin/user/BoEditUser";

import BoReservations from "./pages/admin/reservation/BoReservations";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/notre-restaurant" element={<Restaurant />} />

          <Route path="/commander" element={<Commander />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/finish-reservation" element={<FinishReserv />} />

          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connexion" element={<Connexion />} />

          <Route path="/backoffice" element={<Backoffice />} />

          <Route path="/backoffice/boisson-create" element={<BoCreateBoisson />} />
          <Route path="/backoffice/boissons-list" element={<BoGetBoissons />} />
          <Route exact path="/backoffice/boisson-edit/:id" element={<BoEditBoisson />} />

          <Route path="/backoffice/plat-create" element={<BoCreatePlat />} />
          <Route path="/backoffice/plats-list" element={<BoGetPlats />} />
          <Route path="/backoffice/plat-edit/:id" element={<BoEditPlat />} />

          <Route path="/backoffice/table-create" element={<BoCreateTable />} />
          <Route path="/backoffice/tables-list" element={<BoGetTables />} />
          <Route path="/backoffice/table-edit/:id" element={<BoEditTable />} />

          <Route path="/backoffice/user-create" element={<BoCreateUser />} />
          <Route path="/backoffice/users-list" element={<BoGetUsers />} />
          <Route path="/backoffice/user-edit/:id" element={<BoEditUser />} />

          <Route path="/backoffice/reservations" element={<BoReservations />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
