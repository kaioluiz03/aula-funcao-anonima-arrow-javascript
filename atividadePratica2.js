//1)Criar uma função de seta (arrow function) que recebe um valor numéricos inteiros e positivos como parâmetro:
//a)Se o número for múltiplo de 5, retornar "Bora".
//b)Se o número for múltiplo de 3, retornar "Dale".
//c)Se o número for múltiplo de 5 e 3, retornar "JAVASCRIPT".
//d)Chamar a função e exibir no console o resultado.

 let multiplos = (num) => {

    if(num > 0 && Number.isInteger(num)) {
        if(num % 5 == 0 && num % 3 == 0) {
            return "JAVASCRIPT";
        }
        else if(num % 5 == 0){
            return "Bora";
        }
        else if(num % 3 == 0) {
            return "Dale";
        }
        else{
            return 'Tente outro número esse não é multiplo nem de 3, nem de 5.';
        }
    }
 } 

 console.log(multiplos(8));

//2)Criar uma função de seta (arrow function) para receber como parâmetro uma data de aniversário.
//a)Escrever o signo referente a data de aniversário de acordo com a tabela acima.
//b)Chamar a função e exibir no console o resultado.

var signo = (dia, mes) => {
    let mensagem = 'Seu Signo é: '

    if(dia >= 1 && dia <= 31 && mes >= 1 && mes <= 12) {

        if(dia >= 21 && mes == 3 || dia <= 20 && mes == 4){

            return mensagem + "Áries!";
        }
        else if(dia >= 21 && mes == 4 || dia <= 20 && mes == 5){

            return mensagem + "Touro!";
        }
        else if(dia >= 21 && mes == 5 || dia <= 20 && mes == 6){

            return mensagem + "Gêmeos!";
        }
        else if(dia >= 21 && mes == 6 || dia <= 22 && mes == 7){

            return mensagem + "Câncer!";
        }
        else if(dia >= 23 && mes == 7 || dia <= 22 && mes == 8){

            return mensagem + "Leão!";
        }
        else if(dia >= 23 && mes == 8 || dia <= 22 && mes == 9){

            return mensagem + "Virgem!";
        }
        else if(dia >= 23 && mes == 9 || dia <= 22 && mes == 10){

            return mensagem + "Líbra!";
        }
        else if(dia >= 23 && mes == 10 || dia <= 21 && mes == 11){

            return mensagem + "Escorpião!";
        }
        else if(dia >= 22 && mes == 11 || dia <= 21 && mes == 12){

            return mensagem + "Sagitário!";
        }
        else if(dia >= 22 && mes == 12 || dia <= 19 && mes == 1){

            return mensagem + "Capricórnio!";
        }
        else if(dia >= 20 && mes == 1 || dia <= 18 && mes == 2){

            return mensagem + "Aquário!";
        }
        else if(dia >= 19 && mes == 2 || dia <= 20 && mes == 3){

            return mensagem + "Peixes";
        }
        else{
            return 'uhmm... Seu Signo não foi encontrado. Desculpe!';
        }
    }
}
console.log(signo(15,12));