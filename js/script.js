

//Alterando a mensagem de erro padrão do required
document.querySelector('form input').oninvalid = function() {  
    //Remove a mensagens de erro padrão
    this.setCustomValidity("");
    //É realizada a validação novamente
    if (!this.validity.valid) {
        //Se for inválido, exibe a mensagem abaixo
        this.setCustomValidity("Por favor preencha este campo, ele é obrigatório para fazer o cadastro.");
     }
 };
