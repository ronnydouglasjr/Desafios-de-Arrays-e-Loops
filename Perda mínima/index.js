function solucao(precos) {
  // seu codigo aqui
  let menorPrejuizo = 9999999999999999999;

  for (let i = 0; i < precos.length; i++) {
    for (let j = i + 1; j < precos.length; j++) {
      let compra = precos[i];
      let venda = precos[j];
      let prejuizo = precos[i] - precos[j];

      if (prejuizo > 0) {
        if (prejuizo < menorPrejuizo) {
          menorPrejuizo = prejuizo;
        }
      }
    }
  }
  console.log(menorPrejuizo);
}

function processData(input) {
  const precos = input.split(" ").map((x) => parseInt(x));
  solucao(precos);
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
