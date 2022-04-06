import React, { Component } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { ApiRequests, ErrorTokenMessage } from "api/BaseApi";
import Swal from "sweetalert2";
import CardTable from "components/Cards/CardTable";
import "./Reserv.scss";

export default class Reserv extends Component {
  state = {
    tables: [],
  };

  componentDidMount() {
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

  render() {
    return (
      <div>
        <img
          src="/assets/banner-reserv.png"
          alt="banner"
          className="img-bandeau"
          style={{ width:"100%" }}
        />
        <Container className="test">
          <h3>🍽 Reservez votre table</h3>
        </Container>
        <Container className="pizzas">
          {this.state.tables.map((table) => (
            <CardTable key={table.id.toString()} data={table}/>
          ))}
        </Container>
      </div>
    );
  }
}
