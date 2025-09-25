//Criação das constantes de som
const sons = {
    'A' : 'boom.wav',
    'S' : 'clap.wav',
    'D' : 'hithat.wav',
    'F' : 'hithat.wav',
    'G' : 'kick.wav',
    'H' : 'openhat.wav',
    'I' : 'ride.wav',
    'J' : 'snare.wav',
    'K' : 'tink.wav',
    'L' : 'tom.wav',
}
//Função para criar uma div para cada tecla
const criarDiv = (texto) => {
    div.classList('key');
    div.textContent = texto;
    div.id =texto;
    document.getElementById('container').append(div);
}

//função para mostrar botões na tela
const exibir = Object.keys(sons).forEach(criarDiv)


const adicionarEfeito = (letra) => document.getElementById(letra).
classList.toggle('active');


exibir(sons);
document.getElementById('container')

