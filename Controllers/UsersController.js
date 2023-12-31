const {Users} = require('../DataBase/Models')

class UsersController {

    register = async (req, res) => {
        const UserToBeRegistered = req.body;
        
        if (!UserToBeRegistered.login) {
            return res.status(400).json({message: 'REQUISIÇÃO INVÁLIDA. LOGIN DO USUÁRIO É VAZIO'})
        }

        if (!UserToBeRegistered.password) {
            return res.status(400).json({message: 'REQUISIÇÃO INVÁLIDA. SENHA DO USUÁRIO É VAZIA'})
        }

        if (!UserToBeRegistered.nome) {
            return res.status(400).json({message: 'REQUISIÇÃO INVÁLIDA. NOME DO USUÁRIO É VAZIO'})
        }
     
        /*(const PossibleUser = Users.findAll(
            {
                where: {
                    login: UserToBeRegistered.login,
                }
            }
            );
        if (UserToBeRegistered.login = PossibleUser.login) {
            return res.status(400).json({message: 'ESSE USUÁRIO JÁ EXISTE'})
        }*/
        
        return res.status(200).json(await Users.create(UserToBeRegistered))
    }

    obterTodos = async (req, res) => {
        return res.status(200).json(await Users.findAll())
    }
    
    login = async (req, res) => {
        const login = req.body;
    
        const PossibleUser = await Users.findAll(
            {
                where: {
                    login: login.login,
                    password: login.password
                }
            }
        );

        if (!PossibleUser || PossibleUser.length < 1) {
            return res.status(401).json({message: 'ACESSO INVÁLIDO. POR FAVOR, INFORME CORRETAMENTE SUAS CREDENCIAIS'})
        }

        return res.status(200).json({})
    }

    

    telaInicial = (req, res) => { 
        res.set('Content-Type', 'text/html')
        res.sendFile('C:/Users/LITTLE botton/Desktop/Techers/projetoaula/FrontEnd/paginainicial.html')
    }
    telaExames = (req, res) => { 
        res.set('Content-Type', 'text/html')
        res.sendFile('C:/Users/LITTLE botton/Desktop/Techers/projetoaula/FrontEnd/Exames.html')
    }
    telaCadastrarExames = (req, res) => { 
        res.set('Content-Type', 'text/html')
        res.sendFile('C:/Users/LITTLE botton/Desktop/Techers/projetoaula/FrontEnd/CadastroExames.html')
    }
    telaLogin = (req, res) => { 
        res.set('Content-Type', 'text/html')
        res.sendFile('C:/Users/LITTLE botton/Desktop/Techers/projetoaula/FrontEnd/Login.html')
    }
}

module.exports = new UsersController;