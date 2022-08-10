function media(n1, n2){
    var nota1 = n1;
    var nota2 = n2;
    var media = (nota1 + nota2) / 2;

    return media;
}

var resultado1 = media(6, 7);
var resultado2 = media(8, 7);

console.log(resultado1 + " E " + resultado2);

//Outra forma de fazer:

var media2 = function (v1, v2) {
    return (v1 + v2) / 2;
}

var m = media(5,6);
console.log(m);
