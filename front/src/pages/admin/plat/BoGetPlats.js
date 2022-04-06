import React, { Fragment, Component } from "react";
import { Container, Table } from "react-bootstrap";
import axios from "axios";
import { ApiRequests, Header, Token, ErrorTokenMessage } from "api/BaseApi";
import Swal from "sweetalert2";
import "../Backoffice.scss";

export default class BoGetPlats extends Component {
  state = {
    plats: [],
  };

  componentDidMount() {
    if (!Token) {
      window.location.href = "/connexion";
    } else {
      axios
        .get(ApiRequests.fetchPlats)
        .then((fetchPlats) => {
          const plats = fetchPlats.data;
          this.setState({ plats });
        })
        .catch((error) => {
          console.error(error.message);
          Swal.fire("", ErrorTokenMessage, "error");
        });
    }
  }

  deletePlat(id) {
    Swal.fire({
      title: "Supprimer",
      text: "Êtes-vous sûr de vouloir supprimer ce plat ?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonColor: "#DC143C",
      denyButtonColor: "#7db769",
      confirmButtonText: "Supprimer",
      denyButtonText: "Ne pas supprimer",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${ApiRequests.fetchPlats}/${id}`, {
            headers: Header,
          })
          .then(() => {
            Swal.fire("", "Votre plat a bien été supprimé", "success").then(() => {
              window.location.reload(false);
            });
          })
          .catch((error) => {
            console.error(error.message);
            Swal.fire("", ErrorTokenMessage, "error");
          });
      } else if (result.isDenied) {
        Swal.fire("", "Votre plat n'a pas été supprimé", "error");
      }
    });
  }

  render() {
    return (
      <Fragment>
        <Container className="spaces-footer">
          <h2 className="title-page text-center">Gestion des plats</h2>
          <Table className="mb-5">
            <thead>
              <tr>
                <th>#</th>
                <th>Nom</th>
                <th>Description</th>
                <th>Prix</th>
                <th>Actions</th>
              </tr>
            </thead>
            {this.state.plats.map((plat) => (
              <tbody key={plat.id.toString()}>
                <tr>
                  <td>{plat.id}</td>
                  <td>{plat.name}</td>
                  <td>{plat.description.substring(0, 50)}</td>
                  <td>{plat.price} €</td>
                  <td>
                    <a href={`/backoffice/plat-edit/${plat.id}`}>
                      <button className="btn-edit mx-1">
                        <i className="fas fa-pen" />
                      </button>
                    </a>
                    <button className="btn-delete mx-1" onClick={(e) => this.deletePlat(plat.id)}>
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