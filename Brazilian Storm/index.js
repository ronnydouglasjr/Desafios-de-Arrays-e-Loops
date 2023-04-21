function solucao(notas) {
  //seu codigo aqui
  notas.sort(function (a, b) {
    return a - b;
  });

  notas.shift();
  notas.pop();

  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  let media = soma / notas.length;

  console.log(media);
}

function processData(input) {
  solucao(
    input
      .trim()
      .split(" ")
      .filter((x) => x)
      .map((x) => parseInt(x, 10))
  );
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
