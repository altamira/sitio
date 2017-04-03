import React, { Component } from 'react';

import {
	Modal,
	Button
} from 'react-bootstrap';

export default class Error extends Component {

	render() {

		console.log('Erro:' + JSON.stringify(this.props, null, 2))

		let number = 0;
		let message = 'Erro desconhecido, nenhuma mensagem recebida.';

		if (this.props.response && this.props.response.data) {
			number = this.props.response.data.number || number;
			message = this.props.response.data.message || message;
		} else if (this.props.message) {
			number = this.props.number || number;
			message = this.props.message || message;
		} else if (this.props.mensagem) {
			number = this.props.erro || number;
			message = this.props.mensagem || message;
		}

		return (

			<div className="static-modal">
				<Modal.Dialog>
					<Modal.Header>
						<Modal.Title>Mensagem {number ? '(código do erro: ' + number + ')' : ''}</Modal.Title>
					</Modal.Header>

					<Modal.Body>

						<h4 style={{ textAlign: 'center' }}>{message}</h4>

						{/*<Table>
		        	<tbody>
								<tr>
									<td style={{textAlign: 'center'}}>{number}</td>
									<td style={{textAlign: 'center'}}>{message}</td>
								</tr>
							</tbody> 
						</Table>*/}

					</Modal.Body>

					<Modal.Footer>
						<Button bsStyle={number ? 'danger' : 'success'} onClick={this.props.onClose} >Fechar</Button>
					</Modal.Footer>

				</Modal.Dialog>
			</div>

		);

	}
}		