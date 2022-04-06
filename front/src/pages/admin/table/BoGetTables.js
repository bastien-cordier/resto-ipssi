import React, { Fragment, Component } from "react";
import { Container, Table } from "react-bootstrap";
import axios from "axios";
import { ApiRequests, Header, Token, ErrorTokenMessage } from "api/BaseApi";
import Swal from "sweetalert2";
import "../Backoffice.scss";

export default class BoGetTables extends Component {
  state = {
    tables: [],
  };

  componentDidMount() {
    if (!Token) {
      window.location.href = "/connexion";
    } else {
      axios
        .get(ApiRequests.fetchTables)
        .then((fetchTables) => {
          const tables = fetchTables.data;
          this.setState({ tables });
        })
        .catch((error) => {
          console.error(error.message);
          Swal.fire("", ErrorTokenMessage, "error");
        });
    }
  }

  deleteTable(id) {
    Swal.fire({
      title: "Supprimer",
      text: "Êtes-vous sûr de vouloir supprimer cette table ?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonColor: "#DC143C",
      denyButtonColor: "#7db769",
      confirmButtonText: "Supprimer",
      denyButtonText: "Ne pas supprimer",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${ApiRequests.fetchTables}/${id}`, {
            headers: Header,
          })
          .then(() => {
            Swal.fire("", "Votre table a bien été supprimée", "success").then(() => {
              window.location.reload(false);
            });
          })
          .catch((error) => {
            console.error(error.message);
            Swal.fire("", ErrorTokenMessage, "error");
          });
      } else if (result.isDenied) {
        Swal.fire("", "Votre table n'a pas été supprimée", "error");
      }
    });
  }

  render() {
    return (
      <Fragment>
        <Container className="backoffice">
          <h2 className=" text-center">Gestion des tables</h2>
          <Table className="mb-5 text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre de places par table</th>
                <th>Actions</th>
              </tr>
            </thead>
            {this.state.tables.map((table) => (
              <tbody key={table.id.toString()}>
                <tr>
                  <td>{table.id}</td>
                  <td>{table.slot} places</td>
                  <td>
                    <a href={`/backoffice/table-edit/${table.id}`}>
                      <button className="btn-edit mx-1">
                        <i className="fas fa-pen" />
                      </button>
                    </a>
                    <button className="btn-delete mx-1" onClick={(e) => this.deleteTable(table.id)}>
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
