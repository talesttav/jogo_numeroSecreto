let numeroEscolhido = prompt("Escolha um número: ")
if(numeroEscolhido<0){
    alert('Número escolhido é menor que zero')
} else {
    alert('Número escolhido é maior/igual a zero')
}
//========================================================================================================
let diaSemana = prompt("Que dia é hoje? ")

if (diaSemana == 'Sábado' || diaSemana =='Domingo') {
    alert('Bom final de semana!');
} else { 
    alert('Boa Semana!')
}
//========================================================================================================
let pontuacao = 0
if (pontuacao >=100) {
    console.log('Parabéns! Você venceu!')
} else{
    console.log('Você perdeu! Tente novamente.')
}
//========================================================================================================

let valorConta = 1000

alert(`Você tem R$${valorConta}`)

//========================================================================================================

let nome = prompt('Qual seu nome? ')
alert(`Bem vindo ${nome}!`)