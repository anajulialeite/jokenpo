//variáveis
let humanScore = 0;
let machineScore= 0;

//função para dar fundo a tela com imagem aleatória
function setBackgroundImage() {
    
}

//função para atualizar o placar
function updateScore() {
    document.getElementById("human-score").textContent = humanScore;

    document.getElementById("machine-score").textContent = machineScore;
}
//função com um array para dar início ao jogo
function playHuman(jogador) {
    const items = ["<span class='emoji'>👊</span>", "<span class='emoji'>🖐️</span>", "<span class='emoji'>✌️</span>"];
    const computador = Math.floor(Math.random() * 3);

    //definindo pontuação por jogada
    const jogada = (jogador === 'rock') ? 0 : (jogador === 'paper') ? 1 : 2;

    //chamando a função para o fundo da tela funcionar de forma correta
    setBackgroundImage();
    
    //mostrar o resultado na tela do humano e do computador
    const resultElement = document.querySelector('.result');
    resultElement.innerHTML = `Computador jogou: ${items[computador]}<br>Você jogou: ${items[jogada]}<br>`;

    //definindo empate e o ganhador 
    if (computador === jogada) {
        resultElement.innerHTML += "EMPATE <span class='emoji'>🤦🏻</span>";
    } else if ((jogada === 0 && computador === 2) || 
               (jogada === 1 && computador === 0) || 
               (jogada === 2 && computador === 1)) {
        resultElement.innerHTML += "VOCÊ VENCEU! <span class='emoji'>🎆</span>";
        humanScore++;
    } else {
        resultElement.innerHTML += "A MÁQUINA VENCEU! <span class='emoji'>😿</span>";
        machineScore++;
    }

    //atualizar placar
    updateScore();
}

//Define a imagem de fundo ao carregar a página
window.onload = setBackgroundImage;
