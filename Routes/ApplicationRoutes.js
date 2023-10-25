const UserRoutes = require('./UserRoutes')
const ExamesRoutes = require('./ExamesRoutes')

class carregadorRotasAplicacao {
 
    static inicializarRotasDaAplicacao(app) {
        UserRoutes.inicializarRotasDeUsuarios(app)
        ExamesRoutes.inicializarRotasDeExames(app)
    }

}

module.exports = carregadorRotasAplicacao