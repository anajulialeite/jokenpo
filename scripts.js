// Variáveis do placar
let humanScore = 0;
let machineScore = 0;

// Atualiza o placar
function updateScore() {
    document.getElementById("human-score").textContent = humanScore;
    document.getElementById("machine-score").textContent = machineScore;
}

// Inicia a jogada
function playHuman(jogador) {
    const items = [
        "<span class='emoji'>👊</span>",
        "<span class='emoji'>🖐️</span>",
        "<span class='emoji'>✌️</span>"
    ];

    const computador = Math.floor(Math.random() * 3);

    // Define a pontuação de cada jogada:
    // pedra = 0, papel = 1, tesoura = 2
    const jogada = (jogador === "rock") ? 0 :
                   (jogador === "paper") ? 1 : 2;

    // Exibe as escolhas do jogador e do computador
    const resultElement = document.querySelector(".result");

    resultElement.innerHTML =
        `Computador jogou: ${items[computador]}<br>
         Você jogou: ${items[jogada]}<br>`;

    // Verifica o resultado da rodada
    if (computador === jogada) {
        resultElement.innerHTML += "EMPATE <span class='emoji'>🤦🏻</span>";
    } else if (
        (jogada === 0 && computador === 2) ||
        (jogada === 1 && computador === 0) ||
        (jogada === 2 && computador === 1)
    ) {
        resultElement.innerHTML += "VOCÊ VENCEU! <span class='emoji'>🎆</span>";
        humanScore++;
    } else {
        resultElement.innerHTML += "A MÁQUINA VENCEU! <span class='emoji'>😿</span>";
        machineScore++;
    }

    updateScore();
}

// Reinicia o jogo
function reset() {
    location.reload();
}
