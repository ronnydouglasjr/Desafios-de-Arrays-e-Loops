function solucao(primeiraLetra, segundaLetra, palavras) {
  //seu codigo aqui
  let temPalavra = false;

  for (let i = 0; i < palavras.length; i++) {
    if (primeiraLetra === palavras[i][0] && segundaLetra === palavras[i][1]) {
      console.log(palavras[i]);
      temPalavra = true;
    }
  }

  if (temPalavra === false) {
    console.log("NENHUMA");
  }
}

function processData(input) {
  const { primeiraLetra, segundaLetra, palavras } = JSON.parse(input);
  solucao(primeiraLetra, segundaLetra, palavras);
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
