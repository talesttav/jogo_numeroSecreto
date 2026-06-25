console.log('Bem-Vindo!')

//========================================================================================================

let nome = 'Tales'
console.log(`Olá ${nome}!`)
alert(`Olá ${nome}!`)

//========================================================================================================

 let linguagem = prompt('Qual sua linguagem de programação favorita? ')
console.log(linguagem)

//========================================================================================================

 let valor1 = 10
let valor2 = 20
let resultado = valor1 + valor2

alert(`A soma do ${valor1} e ${valor2} é ${resultado}`)
console.log(`A soma do ${valor1} e ${valor2} é ${resultado}.`)

//========================================================================================================

let valor1 = 20
let valor2 = 10
let resultado = valor1 - valor2

alert(`A subtração do ${valor1} e ${valor2} é ${resultado}`)
console.log(`A subtração do ${valor1} e ${valor2} é ${resultado}.`)

//========================================================================================================

let idade = prompt('Qual sua idade?')
if (idade >= 18) {
    console.log('Você é de maior.')
} else {
    console.log('Você é de menor.')
}

//========================================================================================================

let numero = prompt('Escolha um número: ')
if (numero >= 0) {
    alert('O número é positivo')
} else {
    alert('O número é negativo.')
}

//========================================================================================================

let contador = 1

while (contador <= 10) {
    console.log(contador)
    contador++;
}

//========================================================================================================

let nota = 8
if (nota >= 7 ) {
    console.log('Aprovado.')
} else {
    console.log('Reprovado.')
}

//========================================================================================================

let numeroAleatorio = parseInt(Math.random ())
console.log(numeroAleatorio)

//========================================================================================================

let numeroAleatorio = parseInt(Math.random ()*10 + 1)
console.log(numeroAleatorio)

//========================================================================================================

let numeroAleatorio = parseInt(Math.random ()*1000 + 1)
console.log(numeroAleatorio)