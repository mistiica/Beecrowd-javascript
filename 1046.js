var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(/\s+/);

let [horaInicial, horaFinal] = lines.map(Number)

if(horaFinal > horaInicial){
    console.log(`O JOGO DUROU ${horaFinal - horaInicial} HORA(S)`)
}
else{ 
    console.log(`O JOGO DUROU ${(24 - horaInicial) + horaFinal} HORA(S)`)
}
