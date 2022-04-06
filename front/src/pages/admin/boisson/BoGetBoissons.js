import React, { Fragment, Component } from "react";
import { Container, Table } from "react-bootstrap";
import axios from "axios";
import { ApiRequests, Header, Token, ErrorTokenMessage } from "api/BaseApi";
import Swal from "sweetalert2";
import "../Backoffice.scss";

export default class BoGetBoissons extends Component {
  state = {
    boissons: [],
  };

  componentDidMount() {
    if (!Token) {
      window.location.href = "/connexion";
    } else {
      axios
        .get(ApiRequests.fetchBoissons)
        .then((fetchBoissons) => {
          const boissons = fetchBoissons.data;
          this.setState({ boissons });
        })
        .catch((error) => {
          console.error(error.message);
          Swal.fire("", ErrorTokenMessage, "error");
        });
    }
  }

  deleteBoisson(id) {
    Swal.fire({
      title: "Supprimer",
      text: "Êtes-vous sûr de vouloir supprimer cette boisson ?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonColor: "#DC143C",
      denyButtonColor: "#7db769",
      confirmButtonText: "Supprimer",
      denyButtonText: "Ne pas supprimer",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${ApiRequests.fetchBoissons}/${id}`, {
            headers: Header,
          })
          .then(() => {
            Swal.fire("", "Votre boisson a bien été supprimée", "success").then(() => {
              window.location.reload(false);
            });
          })
          .catch((error) => {
            console.error(error.message);
            Swal.fire("", ErrorTokenMessage, "error");
          });
      } else if (result.isDenied) {
        Swal.fire("", "Votre boisson n'a pas été supprimée", "error");
      }
    });
  }

  render() {
    return (
      <Fragment>
        <Container className="backoffice">
          <h2 className="text-center">Gestion des boissons</h2>
          <Table className="mb-5">
            <thead>
              <tr>
                <th>Image</th>
                <th>Nom</th>
                <th>Prix</th>
                <th>Actions</th>
              </tr>
            </thead>
            {this.state.boissons.map((boisson) => (
              <tbody key={boisson.id.toString()}>
                <tr>
                  <td>
                    <img src={boisson.image} alt={boisson.name} />
                  </td>
                  <td>{boisson.name}</td>
                  <td>{boisson.price} €</td>
                  <td>
                    <a href={`/backoffice/boisson-edit/${boisson.id}`}>
                      <button className="btn-edit mx-1">
                        <i className="fas fa-pen" />
                      </button>
                    </a>
                    <button
                      className="btn-delete mx-1"
                      onClick={(e) => this.deleteBoisson(boisson.id)}
                    >
                      <i className="fas fa-trash-alt" />
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
