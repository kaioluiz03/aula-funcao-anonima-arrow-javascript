//1)Criar uma função anônima para exibir todos os elementos do array abaixo que possuam idade entre 28 a 30:
//a)Chamar a função e exibir o resultado no console.


let idade = function () {
    var aprovados = [
    {candidato: "Renata Soares", nota: 7.8, idade: 29},
    {candidato: "Marcos Teixeira", nota: 7.8, idade: 26},
    {candidato: "Priscila Gomes", nota: 7.8, idade: 30},
    {candidato: "João 0liveira", nota: 7.8, idade: 27},
    {candidato : "Adriana Telles", nota: 7.8, idade: 28}
    ];

    for(var i = 0; i < aprovados.length; i++){
        if(aprovados[i].idade > 28 && aprovados[i].idade < 30){
            console.log(aprovados[i]);
        }
        else{
            return
        }
    }
}
console.log(idade());

//2)Criar um função anônima que recebe uma string como parâmetro:
//a)Repetir o valor do parâmetro 37 vezes.
//b)Retornar o Resultado.
//c)Chamar a função e exibir o resultado no console.

let repetirValor = function (str){
    for(var i = 0; i < 37; i++){
        console.log(str);
    }
}

console.log(repetirValor('Hard'));