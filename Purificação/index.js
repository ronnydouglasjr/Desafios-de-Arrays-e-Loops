function solucao(stringCorrompida) {
  // Meu codigo aqui
  let corrigindo = stringCorrompida.replace(/[^a-zA-Z0-9 ]/g, "");
  console.log(corrigindo);
}

function processData(input) {
  solucao(input);
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
