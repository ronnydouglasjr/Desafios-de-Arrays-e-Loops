function solucao(precos) {
  //meu codigo aqui
  let menorvalor = precos[0];
  let resultado = 0;

  if (precos.length >= 5) {
    for (let newarray of precos) {
      resultado += newarray;
      if (newarray < menorvalor) {
        menorvalor = newarray;
      }
    }
    console.log(resultado - menorvalor);
  } else if (precos.length < 5) {
    for (newarray of precos) {
      resultado += newarray;
    }
    console.log(resultado);
  }
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
