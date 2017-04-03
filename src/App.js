import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';

import logo from './logo.svg';
import './App.css';

import {
  Nav,
  Navbar,
  NavItem,
  Col,
  Row,
  Accordion,
  Panel,
  ListGroup,
  ListGroupItem,
  Badge
} from 'react-bootstrap';

import mqtt from 'mqtt/lib/connect';

import api from './api';

class App extends Component {
  constructor(props) {
    super(props);

    this.handlePortaoVeiculo = this.handlePortaoVeiculo.bind(this);
    this.handlePortaoPedestre = this.handlePortaoPedestre.bind(this);

  }
  
  render() {
    return (
      <div className="App">
        <Row>
          <Column md={6}><Buttom onClick={this.handlePortaoVeiculo} /></Column>
          <Column md={6}><Buttom onClick={this.handlePortaoPedestre} /></Column>
        </Row>
      </div>
    );
  }
}

export default App;
