//Possiveis argumentos em sequencia: Ano, Mês, dia, horas, minutos, segundos, milisegundos
var d = new Date(2022, 01, 09);

//Passando apenas um numero, ele conta como milisegundos apartir do dia 31/12/1969 ás 16:00
var d2 = new Date(500000);

//Outra forma:
var d3 = new Date("02-09-2000");


console.log(d);
console.log(d2);
console.log(d3);

