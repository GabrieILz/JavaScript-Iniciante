var aluno = {
    nome: "Isabelle", 
    notas: [7.3, 8.2]
}

//criando propriedades para o obejeto, fora do objeto
aluno.matricula = 12345;
aluno["sobrenome"] = "Oliveira";

//Outra forma:
var novaProp = "UltimoNome";
aluno[novaProp] = "Silva"


console.log(aluno.nome);
console.log(aluno.notas);
//Obs: para imprimir todo o objeto é só botar apenas "aluno";

//Outra maneira de criar um objeto:
var aluno2 = new Object;

aluno2.nome = "Gabriel"
aluno2.notas = [7.5, 6.5];

console.log(aluno2);
