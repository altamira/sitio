import http from './http'

import config from './config'

function switchPortaoVeiculo(callback) {
	http.post('portao/veiculo', null, callback);
}

function switchPortaoPedestre(callback) {
	http.post('portao/pedestre', null, callback);
}

export default {

	config: config,

	portao: {
        veiculo: switchPortaoVeiculo,
        pedestre: switchPortaoPedestre
    }
}