const numeros = [4, -1, 9, -3, 7, -5];
const numerosPositivos = numeros.filter((numero) => numero > 0);

console.log(numerosPositivos); // [4, 9, 7]


const usuarios = [
    { nome: 'Ana', ativo: true },
    { nome: 'Carlos', ativo: false },
    { nome: 'João', ativo: true }
];

const usuariosAtivos = usuarios.filter((usuario) => usuario.ativo);

console.log(usuariosAtivos);
// [
//   { nome: 'Ana', ativo: true },
//   { nome: 'João', ativo: true }
// ]

const letras = ['a', 'b', 'c', 'd', 'e'];
const letrasEmPosicaoPar = letras.filter((letra, indice) => indice % 2 === 0);

console.log(letrasEmPosicaoPar); // ['a', 'c', 'e']
