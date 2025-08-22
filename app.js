//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.
let amigosAdicionados = [];

function adicionarAmigo() { 

    // Pega a entrada do campo <input id='amigo'.
    let recebeIdAmigo = document.getElementById('amigo');
    let nomeDigitado = recebeIdAmigo.value;
    // Verifica se está o camo está vazio...
    if (nomeDigitado === '') {
        //...caso esteja vazio, exibe um alerta...
       alert('Por favor, insira um nome.');
    } else {
        //...se um nome foi digitado, adiciona ao array.
        amigosAdicionados.push(nomeDigitado);
        limpaCampo();
        }
        
    // Limpa a lista para não ter listas duplicadas.
    limpaLista()

    // Faz a lista <li></li>.    
    amigosAdicionados.forEach(nomeDoAmigo => {
        let listaDeAmigos = document.getElementById('listaAmigos');
        let amigoNaLista = document.createElement('li');
        amigoNaLista.textContent = nomeDoAmigo;
        listaDeAmigos.appendChild(amigoNaLista);
    });
    
    return
        
}

// Função para sortear o amigo secreto.
function sortearAmigo(){

    // Aqui faz a escolha do amigo secreto.
    let escolhendoAmigo = Math.floor(Math.random() * amigosAdicionados.length); 
    console.log(escolhendoAmigo);
    
    // Pega o nome do amigo escolhido...
    let amigoEscolhido = amigosAdicionados[escolhendoAmigo];
    let resultado = document.getElementById('resultado');
    // ...verifica se a lista não etá vazia...
    if (amigosAdicionados != '') {
        // ...caso a lista não esteja vazia, exibe o amigo sorteado...
        resultado.innerHTML = `O amigo secreto sorteado é: ${amigoEscolhido}`;
    } else {
        // ...se a lista estiver vazia, exibe um alerta.
        alert ('Não foi adicionado nenhum amigo.')
    }

    // Limpa a lista após o sorteio.
    limpaLista();
    return
    
}

// Função para limpar o campo id='amigo'.
function limpaCampo() {
    let recebeIdAmigo = document.getElementById('amigo');
    recebeIdAmigo.value = '';
}

// Função para limpar a lista id='listaAmigos'.
function limpaLista() {
    limparLista = document.getElementById('listaAmigos'); //Linha 27.
    limparLista.innerHTML = '';
}
