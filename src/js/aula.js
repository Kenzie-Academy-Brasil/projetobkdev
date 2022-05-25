//console.log("Hello World!")

let fruta = "Maçã"
fruta = "Morango"

console.log(fruta)

const ano = 2023

console.log(ano)

// Tipos de Dados

// String
let dataDeHoje = "25 de Maio de 2022"

// Number
let dia = 25

// Booleano ou Boolean => true ou false
let inverno = false
let outono = true

// Array (Lista)
let novoArray = [1, "oi", true, false, 29, "bolo"]
//console.log(novoArray[5])

novoArray.push("refrigerante")
console.log(novoArray)


// Objeto
// nome
// idade
// cidade

let pessoa = {
    nome: "Maria",
    idade: 29,
    cidade: "Manaus-Am"
}

pessoa.comida = "Sorvete de Chiclete"

console.log(pessoa)


// Operadores Lógicos
/*
=== Idêntico ou Extritamente Igual => verifica se os valores são iguais e do mesmo tipo.
*/ 

let numeroUm = 20
let numeroDois = 20
let numeroTres = "20"
let numeroQuatro = 37

//console.log(numeroUm === numeroDois) // true
//console.log(numeroUm === numeroTres) // false

/*
== Igualdade => avalia se os valores são iguais, independente do tipo de dado.
*/

//console.log(numeroUm == numeroTres) // true
//console.log(numeroUm == numeroDois) // true

/*
!= Diferente => avalia se os valores são diferentes, independente do tipo de dado
*/

//console.log(numeroUm != numeroDois) //false
//console.log(numeroUm != numeroQuatro) //true


/*
!== Não Idêntico => avalia se os valores E os tipos são diferentes.
*/

let numeroCinco = "29"
let numeroSeis = 32

//console.log(numeroCinco !== numeroSeis)

/*
< Menor que
> Maior que
<= Menor ou igual
>= Maior ou igual
*/

let umEhMenorQueZero = 1 < 0
//console.log(umEhMenorQueZero) 

let doisEhMaiorQueUm = 2 > 1
//console.log(doisEhMaiorQueUm)

let tresEhMaiorOuIgualAQuatro = (3 >= 4)
//console.log(tresEhMaiorOuIgualAQuatro)

//console.log(3 <= 4)

//TABELA VERDADE DO E / operador lógico => &&
/*
    TRUE && TRUE => TRUE
    TRUE && FALSE => FALSE
    FALSE && TRUE => FALSE
    FALSE && FALSE => FALSE
*/

//Expressões
let textoUm = "Hoje está frio" //false
let textoDois = "Hoje é dia 25" //true

console.log(true && true)

//TABELA VERDADE DO OU / operador lógico => ||
/*
    TRUE || TRUE => TRUE
    TRUE || FALSE => TRUE
    FALSE || TRUE => TRUE
    FALSE || FALSE => FALSE
*/

let taChuvendo = false
let taQuente = false

console.log(taChuvendo || taQuente)