import {SERVER_API} from './shared/apiconstant.js'

const botao = document.getElementById('btnRedirect')

botao.addEventListener('click', vaiPraTelaCadastroExames);


function vaiPraTelaCadastroExames() {
    console.log("me clickou")
    window.open(SERVER_API + "CadastrarExames")
}
function deleteExame(idExame){
   axios.delete(SERVER_API + DELETE_API, {id: idExame})
}
const EXAMES_API_CONSULTA = 'examesPaciente/consultar'
const DELETE_API = 'examesPaciente/deletar'
const exames = []

const tabelaPagina = document.getElementById('tabela-pagina')
const corpoTabela = tabelaPagina.getElementsByTagName('tbody')[0]

window.onload = carrega

function carrega()  {
   axios.get(SERVER_API + EXAMES_API_CONSULTA)
   .then(result => {

      let contagemExamesNaLinha = 0;
      let CriarCol = document.createElement('td')

      this.exames = result.data
      this.exames.forEach(exame => {

      if (contagemExamesNaLinha > 8) {
       contagemExamesNaLinha = 0
       CriarCol = document.createElement('td')
      }
   
      constroiCard(CriarCol, exame)

      if (contagemExamesNaLinha === 0) {
       corpoTabela.appendChild(CriarCol)
      }
      contagemExamesNaLinha++
      })

   })
   .catch(error => {
      console.log(error)
})


}

function constroiCard(CriarCol, exame) {
   const row = document.createElement('tr')
   row.className = "row"
   const card = document.createElement('div')
   card.id = exame.id
   card.className = 'Exam'
   card.textContent = exame.tipo
   const btnClose = document.createElement('button')
   btnClose.id = exame.id
   btnClose.textContent = "X"
   btnClose.className = "btnFechar"
   btnClose.setAttribute('onclick', 'deleteExame(' + btnClose.id +')')
   row.appendChild(card)
   row.appendChild(btnClose)
   CriarCol.appendChild(row)
}