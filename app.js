let numbersSorted = [];
let limitArray = 10;
let random = generateRandomNumber();
let tries = 1;

function showingText(tag, text) {
  let description = document.querySelector(tag);
  description.innerHTML = text;
  responsiveVoice.speak(text, "Brazilian Portuguese Female", { rate: 1.3 });
}

function inicialMessage() {
  showingText("h1", "Jogo do número secreto");
  showingText("p", `Escolha um número entre 1 e ${limitArray}`);
}

inicialMessage();

function generateRandomNumber() {
  let numberChoosed = parseInt(Math.random() * limitArray + 1);
  let resetingList = numbersSorted.length;

  if (resetingList == 10) {
    numbersSorted = [];
  }

  if (numbersSorted.includes(numberChoosed)) {
    return generateRandomNumber();
  } else {
    numbersSorted.push(numberChoosed);
    console.log(numbersSorted);
    return numberChoosed;
  }
}

function clearInput() {
  guess = document.querySelector("input");
  return (guess.value = "");
}

function verifyingGuess() {
  let guess = document.querySelector("input").value;

  if (guess == random) {
    let tryWord = tries > 1 ? "tentativas" : "tentativa";
    let winningMessage = `Parabéns! Você acertou o número secreto com ${tries} ${tryWord}`;

    showingText("h1", "Acertou");
    showingText("p", winningMessage);

    document.getElementById("reiniciar").disabled = false;
  } else {
    if (guess > random) {
      showingText("p", `O número secreto é menor do que o ${guess}`);
    } else {
      showingText("p", `O Número secreto é maior do que o ${guess}`);
    }
  }
  clearInput();
  tries++;
}

function newGame() {
  random = generateRandomNumber();
  inicialMessage();
  tries = 1;
  document.getElementById("reiniciar").disabled = true;
}
