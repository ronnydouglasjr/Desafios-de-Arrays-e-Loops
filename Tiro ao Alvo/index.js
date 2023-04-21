function solucao(disparos) {
  //seu codigo aqui

  let contador = 0;

  for (let i = 0; i < disparos.length; i++) {
    if (disparos[i] > 70) {
      contador++;
    }
  }

  if (contador >= 3) {
    console.log(contador);
  } else {
    console.log("ELIMINADO");
  }
}

function processData(input) {
  solucao(
    input
      .split(" ")
      .map((x) => Number(x))
      .filter((x) => x)
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
