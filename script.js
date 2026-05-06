/* 
    Função responsável por validar o número
    informado pelo usuário no campo de entrada.
*/
function validarNumero() {

    /* 
        Captura o valor digitado no campo
        identificado pelo id "numero".
    */
    let numero = document.getElementById("numero").value;

    /* 
        Captura o elemento responsável
        pela exibição das mensagens.
    */
    let mensagem = document.getElementById("mensagem");

    /* 
        Verifica se o campo está vazio.
    */
    if (numero === "") {

        /* 
            Exibe mensagem de alerta ao usuário
            solicitando o preenchimento do campo.
        */
        mensagem.textContent = "Por favor, insira um número.";

        /* 
            Define a cor vermelha para indicar erro.
        */
        mensagem.style.color = "red";

    } else {

        /* 
            Converte o conteúdo digitado
            de texto para número inteiro.
        */
        numero = parseInt(numero);

        /* 
            Verifica se o número é maior que 10.
        */
        if (numero > 10) {

            mensagem.textContent = "O número é maior que 10.";

            mensagem.style.color = "green";

        } else {

            /* 
                Verifica se o número é maior que 5
                e menor ou igual a 10.
            */
            if (numero > 5) {

                mensagem.textContent =
                    "O número é maior que 5, mas menor ou igual a 10.";

                mensagem.style.color = "orange";

            } else {

                /* 
                    Caso nenhuma condição anterior seja verdadeira,
                    o número será considerado menor ou igual a 5.
                */
                mensagem.textContent = "O número é 5 ou menor.";

                mensagem.style.color = "blue";

            }

        }

    }

}
