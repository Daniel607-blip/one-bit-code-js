const numeros = [1, 2, 3];
for (const numero of numeros) {
    console.log(numero);
}

const iterador = numeros[Symbol.iterator]()
console.log(iterador)
// .next() 
//Se done for false, ele continua para a próxima iteração e usa o valor atual em value.
//Se done for true, ele termina o loop, pois todos os elementos foram processados.

