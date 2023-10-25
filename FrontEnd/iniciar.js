window.onload = aoCarregarAPagina()

function resetaMensagemLogin() {
    containerMensagemLogin.style.background = 'transparent'
    containerMensagemLogin.style.marginTop = '0rem'
    mensagemLogin.textContent = ''
}

function aoCarregarAPagina(){
    console.log("Pagina Carregada")
    
    resetaMensagemLogin()
}

/*
function ClickButton(){
    axios.get('http://localhost:4000/exemplo')
    .then(
        RespostaDoServidor =>{
            console.log(RespostaDoServidor.data)
        }
    )   
    .catch(
        erro => {
            console.log(erro)
        }
    )
        
}
*/
