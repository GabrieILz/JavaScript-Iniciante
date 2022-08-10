var alunos = ["Gabriel" , "Isabelle", "Aline"];


for(var i = 0; i < alunos.length; i++){
    console.log(alunos[i]);
}

//Outra forma de fazer:

for(var i in alunos){
    console.log(alunos[i]);
}

//Outra forma de fazer:

for(var i of alunos){
    console.log(alunos);
}

//Com o "in" ele pega o index do array e com o of pega o valor mesmo.