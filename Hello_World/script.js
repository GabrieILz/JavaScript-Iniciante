var nota1 = 8.0;
var nota2 = 1.0;

var media = (nota1 + nota2) / 2;

var conceito = "";

if(media >= 8){

    conceito = "Ótimp"; 
}
else if(media >= 6.5){

    conceito = "Bom";
}
else{
    conceito = "Regular";
}

console.log(media);
console.log(conceito);

switch (conceito){
    case "Ótimo":
        console.log("Parabéns, vc é mt doidera!");
    case "Bom":
        console.log("Você é bão!");
    case "Regular":
        console.log("Pô manin, estuda ae.");
    default:
        console.log("Deu erro :/");            
}