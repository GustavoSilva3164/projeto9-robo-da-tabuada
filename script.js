  let number = parseInt(prompt("Digite um número do 1 ao 20 para calcular a tabuada(aviso; o número informado sera multiplicado ate 20x):"));

  if (number < 1 || number > 20) {
    alert("O número informado esta acima do limite permitido. Por favor, digite um número entre 1 e 20.");
  } else {

    let operationResult = "";

    for (let i = 1; i <= 20; i++) {
        operationResult += `${number} x ${i} = ${number * i}\n`;
    }

    alert("A tabuada de " + number + ":\n" + operationResult);
  }
