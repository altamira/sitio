import http from './http'

function switchPortaoVeiculo(callback) {
	http.post('portao/veiculo', null, callback);
}

function switchPortaoPedestre(callback) {
	http.post('portao/pedestre', null, callback);
}
export default {
	portao: {
        veiculo: switchPortaoVeiculo,
        pedestre: switchPortaoPedestre
    }
}