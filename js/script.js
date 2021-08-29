function validaCPF(cpf){
    if(cpf.length != 11){
    return false;
    }
    else{
        let numeros = cpf.substring(0, 9);
        let digitos = cpf.substring(9);

        let soma = 0;
        for (let i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }

        let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        // Validação do primeiro dígito
        if(resultado != digitos.charAt(0)) {
            return false;
        }

        soma = 0;
        numeros = cpf.substring(0, 10);
        console.log(numeros);
      
        for(let k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        //Validação do segundo digito
        if (resultado != digitos.charAt(1)) {
            return false;
        }
        return true;
    }
}

//Função de validação
function validacao() {
    document.getElementById('erro').style.display = 'none';

    let cpf = document.getElementById('cpf').value;
    let resultadoValidacao = validaCPF(cpf);

    if (!resultadoValidacao) {
          document.getElementById('erro').style.display = 'flex';
          return false;
     } else {
        if(confirm("Ao se cadastrar você concorda em compartilhar seus dados, clique em OK para confirmar ou clique em Cancelar.")){   
        alert("Seu cadastro foi realizado com sucesso!");
        return true;
        } 
        else {
            return false;
        }
     }
}

//Função  para limpar os campos
function limparCampos() {
    document.getElementById("nome").value = ("");
    document.getElementById("sobrenome").value = ("");
    document.getElementById("cpf").value = ("");
    document.getElementById("rg").value = ("");
    document.getElementById("sexo").value = ("Feminino");
    document.getElementById("endereco").value = ("");
    document.getElementById("numero").value = ("");
    document.getElementById("bairro").value = ("");
    document.getElementById("cidade").value = ("");
    document.getElementById("estado").value = ("");
    document.getElementById("cep").value = ("");
    document.getElementById("telefoneFixo").value = ("");
    document.getElementById("telefoneCelular").value = ("");
    document.getElementById("email").value = ("");
}