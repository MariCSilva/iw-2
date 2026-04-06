console.log("1) comparar numero maior");

function maior(a,b){
    if (a > b) {
        return a;
    } if (b > a) {
        return b;
    } else {
        return (a+b)/2;
    }
}

let numero = maior(5,200);
console.log("o maior numero é: ", numero);

console.log("2) par e impar");

function par(n){
    return n%2 == 0;
}

let numeropar = par(10);
console.log("o numero é par: ",numeropar);

console.log("3) fatorial");

function fatorial(num){
    let fatorial = 1;

    for (let i = 1; i <= num; i++) {
        fatorial = fatorial * i;
    }
    return fatorial;
}

let fat = fatorial(3);
console.log("o fatorial é: ",fat);

console.log("4) média");

function calcularMedia(numeros) {
  if (numeros.length === 0) return 0;

  const soma = numeros.reduce((acumulador, numeroAtual) => {
    return acumulador + numeroAtual;
  }, 0);

  return soma / numeros.length;
}
const lista1 = [10, 20, 30, 40, 50];
console.log("Média da lista:", calcularMedia(lista1));

console.log("5) celsius para fahrenheit")

function celpfah(cels) {
    return cels * 1.8 + 32;
}

let fahrenheit = celpfah(20);
console.log("a converção de celsius para fahrenheit é: ", fahrenheit);