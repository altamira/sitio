import React, { Component } from 'react';

//http://192.168.0.133:1880/sitio

import './App.css';

import {
  Col,
  Row,
  OverlayTrigger,
  Tooltip,
  Button,
  Image
} from 'react-bootstrap';

import api from './api';

import Car from './car.svg'
import Walk from './walk.svg'

import ErrorMessage from './Error'

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
    api.config.setErrorHandler(this.handleError);
  }

  componentWillUnmount() {
    //this.unsubscribe()
  }

  handleError(err) {
    let props = { ...err, message: err.message, stack: err.stack }
    this.setState({ dialog: <ErrorMessage {...props} onClose={this.handleCloseDialog.bind(this)} /> })
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
          <Col md={6} >

            <OverlayTrigger 
              placement="top" 
              overlay={(<Tooltip id="tooltip">Abrir e Fechar Portão para Veiculos</Tooltip>)}
            >
                <Button
                  onClick={this.handlePortaoVeiculo}
                  style={{width: '80%', height: 200, margin: 20}}
                  bsStyle="success"
                >
                  <Image src={Car} />
                  <div><span>Veiculos</span></div>
                </Button>
            </OverlayTrigger>

          </Col>
          <Col md={6} >

            <OverlayTrigger 
              placement="top" 
              overlay={(<Tooltip id="tooltip">Abrir e Fechar Portão para Pedestres</Tooltip>)}
            >
                <Button
                  onClick={this.handlePortaoPedestre}
                  style={{width: '80%', height: 200, margin: 20}}
                  bsStyle="success"
                >
                  <Image src={Walk} />
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
