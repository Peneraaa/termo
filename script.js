const secretWord = "sagaz"; 
let currentRow = 0;

function submitGuess() {
  const input = document.getElementById("guess-input");
  const guess = input.value.toLowerCase();
  const message = document.getElementById("message");

  if (guess.length !== 5) {
    message.textContent = "A palavra precisa ter 5 letras!";
    return;
  }

  input.value = "";
  message.textContent = "";

  const row = document.createElement("div");
  row.className = "row";

  for (let i = 0; i < 5; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.textContent = guess[i];

    if (guess[i] === secretWord[i]) {
      cell.classList.add("correct");
    } else if (secretWord.includes(guess[i])) {
      cell.classList.add("present");
    } else {
      cell.classList.add("absent");
    }

    row.appendChild(cell);
  }

  document.getElementById("game-board").appendChild(row);
  currentRow++;

  if (guess === secretWord) {
    message.textContent = "Parabéns! Você acertou!";
    disableInput();
  } else if (currentRow >= 6) {
    message.textContent = `Fim de jogo! A palavra era "${secretWord.toUpperCase()}"`;
    disableInput();
  }
}

function disableInput() {
  document.getElementById("guess-input").disabled = true;
}
