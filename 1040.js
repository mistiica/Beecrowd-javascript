const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let n1 = input[0];
let n2 = input[1];
let n3 = input[2];
let n4 = input[3];


let media = (n1 * 2 + n2 * 3 + n3 * 4 + n4 * 1) / 10;

console.log(`Media: ${media.toFixed(1)}`);

let idx = 4;

if (media >= 7.0) {
  console.log("Aluno aprovado.");
} else if (media < 5.0) {
  console.log("Aluno reprovado.");
} else {
  console.log("Aluno em exame.");

  let notaExame = input[idx];
  console.log(`Nota do exame: ${notaExame.toFixed(1)}`);

  let mediaFinal = (media + notaExame) / 2;

  if (mediaFinal >= 5.0) {
    console.log("Aluno aprovado.");
  } else {
    console.log("Aluno reprovado.");
  }

  console.log(`Media final: ${mediaFinal.toFixed(1)}`);
}
