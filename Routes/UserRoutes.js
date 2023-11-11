const {SERVER_BASE_URL} = require('../shared/constant.js')
const UsersController = require('../Controllers/UsersController')

class UsersRoutes {
 
    static inicializarRotasDeUsuarios(app) {
        const ENTITY_NAME = 'users/'
        app.post(SERVER_BASE_URL + ENTITY_NAME + 'login', UsersController.login)
        app.get(SERVER_BASE_URL + ENTITY_NAME + 'consultar', UsersController.obterTodos)
        app.post(SERVER_BASE_URL + ENTITY_NAME + 'register', UsersController.register)
        app.get(SERVER_BASE_URL + 'pagina-login', UsersController.telaLogin)
        app.get(SERVER_BASE_URL + 'pagina-inicial', UsersController.telaInicial)
        app.get(SERVER_BASE_URL + 'exames', UsersController.telaExames)
        app.get(SERVER_BASE_URL + 'CadastrarExames', UsersController.telaCadastrarExames)
    }

}

module.exports = UsersRoutes