function calcMedia(){
    return (this.notas1 + this.notas2) / 2;
}

var turma = [
    {
        nome: "Igor",
        nota1: 9,
        nota2: 7,
        media: calcMedia
    }
]

var aluno = turma[0];

console.log(aluno);
console.log(aluno.media);

