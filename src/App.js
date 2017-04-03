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
  Badge,
  OverlayTrigger,
  Tooltip,
  Glyphicon,
  Button
} from 'react-bootstrap';

import api from './api';

import Error from './Error'

class App extends Component {
  constructor(props) {
    super(props);

    this.handlePortaoVeiculo = this.handlePortaoVeiculo.bind(this);
    this.handlePortaoPedestre = this.handlePortaoPedestre.bind(this);

    this.handleResult = this.handleResult.bind(this);  
    this.handleError = this.handleError.bind(this); 
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
     
  }
  
  componentWillMount() {
    api.config.setErrorHandler(this.handleErro);
  }

  componentWillUnmount() {
    //this.unsubscribe()
  }

  handleError(err) {
    let props = { ...err, message: err.message, stack: err.stack }
    this.setState({ dialog: <Error {...props} onClose={this.handleCloseDialog.bind(this)} /> })
  }

  handleCloseDialog() {
    this.setState({ dialog: null })
  }

  handlePortaoVeiculo() {
    api.portao.veiculo(this.handleResult.bind(this))
  }

  handlePortaoPedestre() {
    api.portao.pedestre(this.handleResult.bind(this))
  }

  handleResult(result) {

  }

  render() {
    return (
      <div className="App">
        <Row>
          <Col md={3} >

            <OverlayTrigger 
              placement="top" 
              overlay={(<Tooltip id="tooltip">Abrir e Fechar Portão para Veiculos</Tooltip>)}
            >
                <Button
                  onClick={this.handlePortaoVeiculo}
                  style={{width: 120}}
                  bsStyle="success"
                >
                  <Glyphicon glyph="search" />
                  <div><span>Veiculos</span></div>
                </Button>
            </OverlayTrigger>

          </Col>
          <Col md={3} >

            <OverlayTrigger 
              placement="top" 
              overlay={(<Tooltip id="tooltip">Abrir e Fechar Portão para Pedestres</Tooltip>)}
            >
                <Button
                  onClick={this.handlePortaoVeiculo}
                  style={{width: 120}}
                  bsStyle="success"
                >
                  <Glyphicon glyph="search" />
                  <div><span>Pedestre</span></div>
                </Button>
            </OverlayTrigger>

          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
