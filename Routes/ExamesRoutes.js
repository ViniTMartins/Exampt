const ExamesController = require('../Controllers/ExamesController')
const {SERVER_BASE_URL} = require('../shared/constant.js')

class ExamesRoutes {
 
    static inicializarRotasDeExames(servidor) {
        const ENTITY_NAME = 'examesPaciente/'

        servidor.get(SERVER_BASE_URL + ENTITY_NAME + 'consultar', ExamesController.consultar)
        servidor.get(SERVER_BASE_URL + ENTITY_NAME + 'consultar-by-id/:id', ExamesController.consultarPeloId)
        servidor.post(SERVER_BASE_URL + ENTITY_NAME + 'cadastrar', ExamesController.cadastrar)
        servidor.put(SERVER_BASE_URL + ENTITY_NAME + 'atualizar', ExamesController.atualizar)
    }

}

module.exports = ExamesRoutes