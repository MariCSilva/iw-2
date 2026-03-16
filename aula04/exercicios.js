var numero = prompt("Digite um numero");
if (numero % 2 == 0){
    alert ("o numero é par");
} else {
    alert ("o numero é impar");
}


var idade = prompt("Qual  a sua idade?");
if (idade <= 0){
    alert("Idade Inválida");
}   if (idade >= 18){
        alert("Maior de idade");
}   else {
        alert("Menor de Idade");
}

console.log("for 1 -- 10");

for (var i = 1; i < 11; i ++) {
    console.log(i)
};

console.log("while contagem regressiva");

var cont = prompt("digite um numero para a contagem regressiva");
while(cont >= 0){
    console.log(cont)
    cont = cont - 1;
}

console.log("tabuada");
var tabu = prompt("Digite um numero para começar a tabuada de 1 a 10");
for (var i = 1; i < 11; i ++) {
    var mult = i * tabu;
    console.log(tabu,'x', i, '=',  mult);
};

console.log("soma acumulativa");

var somat = prompt("Digite um numero e some de 1 até ele");
var acum = 0;
for(var i = 1; i <= somat; i++){
    acum = acum + i;
    console.log(acum);
}

var n = prompt("Digite um numero para saber se ele é primo ou não");
if (n % 2 == 1){
    console.log("O numero",n, "não é primo");

} else{
    console.log("O numero",n, "é primo");
}


var usuario = prompt("Digite seu nome de usuario");
var senhausuario = prompt("Digite a senha");
var senha = "1234senha";
while(senha != senhausuario){
    senhausuario = prompt("Senha incoreta. Digite novamente");
}
alert("Senha correta");


var contapositivos = 0
while (somapositivos >= 0){
    var somapositivos = prompt("digite numeros positivos para somar, pare a conta digitando um numero negativo.");
    contapositivos = contapositivos + somapositivos;
}
console.log("a soma desses numeros é", contapositivos);