import React, { Fragment, Component } from "react";
import { Container, Table } from "react-bootstrap";
import axios from "axios";
import { ApiRequests, Header, Token, ErrorTokenMessage } from "api/BaseApi";
import Swal from "sweetalert2";
import "../Backoffice.scss";

export default class BoGetUsers extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    if (!Token) {
      window.location.href = "/connexion";
    } else {
      axios
        .get(ApiRequests.fetchUsers, { headers: Header })
        .then((fetchUsers) => {
          const users = fetchUsers.data;
          this.setState({ users });
        })
        .catch((error) => {
          console.error(error.message);
          Swal.fire("", ErrorTokenMessage, "error");
        });
    }
  }

  deleteUser(id) {
    Swal.fire({
      title: "Supprimer",
      text: "Êtes-vous sûr de vouloir supprimer cette utilisateur ?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonColor: "#DC143C",
      denyButtonColor: "#7db769",
      confirmButtonText: "Supprimer",
      denyButtonText: "Ne pas supprimer",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${ApiRequests.fetchUsers}/${id}`, {
            headers: Header,
          })
          .then(() => {
            Swal.fire("", "Votre utilisateur a bien été supprimé", "success").then(() => {
              window.location.reload(false);
            });
          })
          .catch((error) => {
            console.error(error.message);
            Swal.fire("", ErrorTokenMessage, "error");
          });
      } else if (result.isDenied) {
        Swal.fire("", "Votre utilisateur n'a pas été supprimé", "error");
      }
    });
  }

  render() {
    return (
      <Fragment>
        <Container className="backoffice">
          <h2 className=" text-center">Gestion des utilisateurs</h2>
          <Table className="mb-5">
            <thead>
              <tr>
                <th>#</th>
                <th>Nom d'utilisateur</th>
                <th>Mot de passe</th>
                <th>Actions</th>
              </tr>
            </thead>
            {this.state.users.map((user) => (
              <tbody key={user.id.toString()}>
                <tr>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.password}</td>
                  <td>
                    <a href={`/backoffice/user-edit/${user.id}`}>
                      <button className="btn-edit mx-1">
                        <i className="fas fa-pen" />
                      </button>
                    </a>
                    <button className="btn-delete mx-1" onClick={(e) => this.deleteUser(user.id)}>
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
