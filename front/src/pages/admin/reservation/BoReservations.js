import React, { Fragment, Component } from "react";
import { Container, Table } from "react-bootstrap";
import axios from "axios";
import { ApiRequests, Header, Token, ErrorTokenMessage } from "api/BaseApi";
import Swal from "sweetalert2";
import "../Backoffice.scss";
import {FaTrashAlt} from 'react-icons/fa';

export default class BoReservations extends Component {
    state = {
        reservations: [],
        loading: false,
    };

    componentDidMount() {
        this.setState({ loading : true });
        if (!Token) {
            window.location.href = "/connexion";
        } else {
            axios
                .get(ApiRequests.fetchReservations, {
                    headers: Header,
                })
                .then((res) => {
                    const reservations = res.data;
                    this.setState({ reservations : reservations, loading : false });
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
            text: "Êtes-vous sûr de vouloir supprimer cette pizza ?",
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
                        Swal.fire("", "Votre pizza a bien été supprimée", "success").then(() => {
                            window.location.reload(false);
                        });
                    })
                    .catch((error) => {
                        console.error(error.message);
                        Swal.fire("", ErrorTokenMessage, "error");
                    });
            } else if (result.isDenied) {
                Swal.fire("", "Votre pizza n'a pas été supprimée", "error");
            }
        });
    }

    updateStatus(status, id){
        axios
            .put(`${ApiRequests.fetchReservations}/${id}`, {status: status},{
                headers: Header,
            })
            .then(() => {
                Swal.fire("", "mise à jour", "success").then(() => {
                    window.location.reload(false);
                });
            })
            .catch((error) => {
                console.error(error.message);
                Swal.fire("", ErrorTokenMessage, "error");
            });
    }

    render() {
        return (
            this.loading ? (
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
                                <td>{reservation.price}</td>
                                <td>{reservation.status}</td>
                                <td>
                                        {reservation.status === "prepare"
                                            ? (<button href="#" onClick={() => this.updateStatus("finished", reservation.id)}>Fini</button>)
                                            : (<></>)}
                                        {reservation.status === "prepare" || reservation.status === "finished"
                                            ? (<button href="#" onClick={() => this.updateStatus("delivered", reservation.id)}>Livrer</button>)
                                            : (<></>)}
                                        <button href="#" onClick={() => this.deleteReservation(reservation.id)}>< FaTrashAlt/></button>
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
        ));
    }
}
