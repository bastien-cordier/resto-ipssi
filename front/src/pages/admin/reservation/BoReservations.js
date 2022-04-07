import React, { Fragment, Component } from "react";
import { Container, Table } from "react-bootstrap";
import axios from "axios";
import { ApiRequests, Header, Token, ErrorTokenMessage } from "api/BaseApi";
import Swal from "sweetalert2";
import "../Backoffice.scss";
import { FaTrashAlt } from "react-icons/fa";

export default class BoReservations extends Component {
  state = {
    reservations: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    if (!Token) {
      window.location.href = "/connexion";
    } else {
      axios
        .get(ApiRequests.fetchReservations, {
          headers: Header,
        })
        .then((res) => {
          const reservations = res.data;
          this.setState({ reservations: reservations, loading: false });
        })
        .catch((error) => {
          console.error(error.message);
          Swal.fire("", ErrorTokenMessage, "error");
        });
    }
  }

  deleteReservation(id) {
    Swal.fire({
      title: "Supprimer",
      text: "Êtes-vous sûr de vouloir supprimer cette commande ?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonColor: "#DC143C",
      denyButtonColor: "#7db769",
      confirmButtonText: "Supprimer",
      denyButtonText: "Ne pas supprimer",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${ApiRequests.fetchReservations}/${id}`, {
            headers: Header,
          })
          .then(() => {
            Swal.fire("", "Votre commande a bien été supprimée", "success").then(() => {
              window.location.reload(false);
            });
          })
          .catch((error) => {
            console.error(error.message);
            Swal.fire("", ErrorTokenMessage, "error");
          });
      } else if (result.isDenied) {
        Swal.fire("", "Votre commande n'a pas été supprimée", "error");
      }
    });
  }

  updateStatus(status, id) {
    axios
      .put(
        `${ApiRequests.fetchReservations}/${id}`,
        { status: status },
        {
          headers: Header,
        }
      )
      .then(() => {
        Swal.fire("", "Mise à jour", "success").then(() => {
          window.location.reload(false);
        });
      })
      .catch((error) => {
        console.error(error.message);
        Swal.fire("", ErrorTokenMessage, "error");
      });
  }

  render() {
    return this.loading ? (
      <div>Chargement</div>
    ) : (
      <Fragment>
        <Container className="backoffice">
          <h2 className="text-center">Gestion des commandes</h2>
          <Table className="mb-5">
            <thead>
              <tr>
                <th>Prénom</th>
                <th>Nom</th>
                <th>tel</th>
                <th>Prix</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            {this.state.reservations.map((reservation) => (
              <tbody key={reservation.id.toString()}>
                <tr>
                  <td>{reservation.firstName}</td>
                  <td>{reservation.lastName}</td>
                  <td>{reservation.tel}</td>
                  <td>{reservation.price} €</td>
                  <td>{reservation.status}</td>
                  <td>
                    {reservation.status === "prepare" ? (
                      <button
                        href="#"
                        className="btn-load-orange"
                        onClick={() => this.updateStatus("finished", reservation.id)}
                      >
                        <i class="fa-solid fa-spinner" />
                      </button>
                    ) : (
                      <></>
                    )}
                    {reservation.status === "prepare" || reservation.status === "finished" ? (
                      <button
                        href="#"
                        className="btn-check-green"
                        onClick={() => this.updateStatus("delivered", reservation.id)}
                      >
                        <i class="fa-solid fa-check" />
                      </button>
                    ) : (
                      <></>
                    )}
                    <button
                      href="#"
                      className="btn-delete-red"
                      onClick={() => this.deleteReservation(reservation.id)}
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
          <div className="text-center">
            <a href="/backoffice">
              <button className="btn-back-menu">Retour au BackOffice</button>
            </a>
          </div>
        </Container>
      </Fragment>
    );
  }
}
