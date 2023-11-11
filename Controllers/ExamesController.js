const {Exames} = require('../DataBase/Models')

class ExamesController {
    consultar = async (requisicao, resposta) => {
        let ExamesConsultados = [] 

        try {
            ExamesConsultados = await Exames.findAll({})
        } catch (error) {
            console.log(error)
        }
        
        return resposta.status(200).json(ExamesConsultados);
    }

    consultarPeloId = async (requisicao, resposta) => {
        const IdExame = requisicao.params.id
        console.log(IdExame)
        return resposta.status(200).json(await Exames.findByPk(IdExame));
    }

    cadastrar = async (requisicao, resposta) => {
        const Exame = requisicao.body;

        if (!Exame.tipo) {
            return resposta.status(400).json({message: 'O EXAME DEVE TER UM TIPO'})
        }

        return resposta.status(200).json(await Exames.create(Exame));
    }

    atualizar = async (requisicao, resposta) => {
        const Exame = requisicao.body;
        const ExameModel = await Exames.findByPk(Exame.id)

        if (!Exame.tipo) {
            return resposta.status(400).json({message: 'O EXAME DEVE TER UM TIPO'})
        }

        return resposta.status(200).json(await ExameModel.update(Exame));
    }
    deletar = async (requisicao, resposta) => {
        const Exame = requisicao.body;

        return resposta.status(200).json(await Exames.truncate(Exame));
    }
}

module.exports = new ExamesController;