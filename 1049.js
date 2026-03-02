var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = lines[0];
let B = lines[1];
let C = lines[2];

const animal = {
    vertebrado: {
        ave:{
            carnivoro: "aguia",
            onivoro: "pomba"
        },
        mamifero:{
            onivoro: "homem",
            herbivoro: "vaca"
        }
    },

    invertebrado:{
        inseto: {
            hematofago: "pulga",
            herbivoro: "lagarta"
        },
        anelideo: {
            hematofago: "sanguessuga",
            onivoro: "minhoca"
        }
    }
}
console.log(animal[A][B][C])
