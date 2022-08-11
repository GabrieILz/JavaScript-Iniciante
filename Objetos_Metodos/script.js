function calcMedia(){
    return (this.notas[0] + this.notas[1]) / 2;
}

var aluno = {
    nome:"Isabelle",
    notas: [10,10],

    media: calcMedia
}

var aluno2 = {
    nome:"Gabriel",
    notas: [2,5],

    media: calcMedia
}


console.log(aluno.nome);
console.log(aluno.media);

console.log(aluno2.nome);
console.log(aluno2.media);