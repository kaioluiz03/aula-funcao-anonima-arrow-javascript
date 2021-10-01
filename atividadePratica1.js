//1)Criar uma função anônima para exibir no console um array com os nomes de 5 capitais da região Nordeste do Brasil:
//a)Transformar todos os elementos em letras maiúsculas.

let capitaisNordeste = function (cidades) {
    let cidadesMaiusculas = [];
    for(var i = 0; i < cidades.length; i++){
       cidadesMaiusculas.push(cidades[i].toUpperCase());
    }
    return(cidadesMaiusculas)
}

console.log(capitaisNordeste(['Recife','Salvador','Fortaleza','São Luiz','Natal']));

//2)Criar uma função anônima que retorna os números pares maiores que 100 e menores que 450.
//a)Chamar a função e exibir no console o retorno da função. 

let numerosPares = function () {
    let pares = [];
    for (var i = 101;i < 450; i++){
        if(i % 2 === 0){
            pares.push(i);
        }
    }
    return pares;
}

console.log(numerosPares());

//3)Criar uma função anônima que recebe quatro strings:
//a)Concatenar as strings e retornar o resultado.
//b)Chamar a função e exibir no console o resultado.

let juntarStrings = function(str1, str2, str3, str4) {
    let resultado = str1.concat(str2, str3, str4);
    return resultado;
}
console.log(juntarStrings('Oi', 'Eu','Sou','Kaio'));