//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.
let amigosSorteados = [];
let amigosAdicionados = [];

// Função para adicionar os amigos.
function adicionarAmigo() { 

    // Pega a entrada do campo <input id='amigo'.
    let recebeIdAmigo = document.getElementById('amigo');
    let nomeDigitado = recebeIdAmigo.value;

    // Verifica se o camo está vazio ou se um nome já foi adicionado...
    if (amigosAdicionados.includes(nomeDigitado)) {
        //...caso já tenha adicionado um nome exibe o alerta...
        alert ('Nome já adicionado.');
        limpaCampo();
    }
    else if (nomeDigitado === '') {
        // ...e caso esteja vazio, exibe o alerta...
       alert('Por favor, insira um nome.');
    } 
    else {
        //...se um nome foi digitado e não está na lista, adiciona ao array.
        amigosAdicionados.push(nomeDigitado);
        limpaCampo();
        }
        
    limpaLista();

    // Faz a lista <li></li>.    
    amigosAdicionados.forEach(nomeDoAmigo => {
        let listaDeAmigos = document.getElementById('listaAmigos');
        let amigoNaLista = document.createElement('li');
        amigoNaLista.textContent = nomeDoAmigo;
        listaDeAmigos.appendChild(amigoNaLista);
    });   
}

// Função para sortear o amigo secreto.
function sortearAmigo(){

    // Aqui faz a escolha do amigo secreto.
    let escolhendoAmigo = Math.floor(Math.random() * amigosAdicionados.length);
     // Pega o nome do amigo escolhido.
    let amigoEscolhido = amigosAdicionados[escolhendoAmigo];
    let resultado = document.getElementById('resultado');
    // Conta quantos itens há na lista.
    let quantidadeDeAmigosNaLista = amigosAdicionados.length;

    // ...verifica se a lista não etá vazia...
    if (amigosAdicionados != '') {
        // ...caso a lista não esteja vazia, exibe o amigo sorteado...
        resultado.innerHTML = `O amigo secreto sorteado é: ${amigoEscolhido}`;
    } else {
        // ...se a lista estiver vazia, exibe um alerta.
        alert ('Não foi adicionado nenhum amigo.');
    } 

    // Verifica se o nome já foi adicionado...
    if (amigosSorteados.includes(amigoEscolhido)) {
        //...caso a lista de nomes sorteados contenha 
        // o mesmo nome, será sorteado um novo...
        return sortearAmigo();
    } else {
        //...caso contrário será adicioinado
        // a lista de amigos sorteados.
        amigosSorteados.push(amigoEscolhido);
    }
    //Aqui verifica se todos os nomes foram sorteados
    let numeroDeItensNaListaDeSorteados = amigosSorteados.length;

    // Quando todos os itens for sorteado...
    if (quantidadeDeAmigosNaLista == numeroDeItensNaListaDeSorteados) {
        amigosSorteados = [];
        amigosAdicionados = []; 
        //...será exibido o alerta.
        alert('Todos os nomes foram sorteados.');
    }
    // Limpa a lista após o sorteio.
    limpaLista();
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