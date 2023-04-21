function solucao(sequencia) {
  //seu codigo aqui
    let contador = 0;

    for (let i = 0; i < sequencia.length; i++) {
      if (sequencia[i] === ">") {
        contador++;
        if (contador > 6) {
          contador = 0;
        }
      } else {
        contador--;
        if (contador < 0) {
          contador = 6;
        }
      }
    }
    console.log(contador);
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

