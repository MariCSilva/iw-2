alert ("Bem-vindo ao nosso site");
let nome = prompt("qual é o seu nome?");
alert ("Olá," + nome + "!" );
let idade = prompt("Qual  a sua idade?");
if (idade >= 18){
    console.log("Maior de idade");
} if (idade < 18 && idade > 0){
    console.log("Menor de idade");
} else {
    console.log("Idade inválida");
}
let resposta = confirm("você deseja continuar?");
if (resposta) {
alert("você escolheu continuar");
} else {
alert ("voce cancelou a ação");
}
let numero1 = 2;
let numero2 = 7;
let pergunta = prompt("Digite um numero para a conta");
let pergunta2 = prompt("Digite um segundo numero para a soma");
let numero3 = parseInt(pergunta);
let numero4 = parseInt(pergunta2);
let soma = numero1 + numero2 + numero3 + numero4;
alert(soma);
let pergunta3 = prompt("digite um numero para ver o dobro dele");
let numero5 = parseFloat(pergunta3);
let dobro = numero5 * 2;
alert("o dobro de " + numero5 + " é " + dobro);
let nome2 = prompt("qual é o seu nome?");
let idade2 = prompt("Qual  a sua idade?");
alert ("O usuario se chama " + nome2 + " e tem " + idade2 + " anos de idade");