let contador = 10;

while (contador >= 0) {
    alert(contador);
    contador--;
}

//========================================================================================================
let contador = 1;

while (contador <= 10) {
    alert(contador);
    contador++;
}

//========================================================================================================


let contador = 10;

while (contador >= 0) {
    console.log(contador);
    contador--;
}

//========================================================================================================

let contador = 1;

while (contador <= 10) {
    console.log(contador);
    contador++;
}

//========================================================================================================

let contador = 0
let qntdNumero = prompt("Quantos números quer adicionar? ") ;
let qntdNumeroFaltante = qntdNumero
let numero =[]
    
while(contador!=qntdNumero){
        numero.push(prompt(`Adicione ${qntdNumeroFaltante}`));
        contador++
        qntdNumeroFaltante--
    }
    
    alert(numero);

//========================================================================================================

let contador = 0
let qntdNumero = prompt("Quantos números quer adicionar? ") 
let qntdNumeroFaltante = qntdNumero
let numero =[]
    
while(contador!=qntdNumero){
    numero.unshift(prompt(`Adicione ${qntdNumeroFaltante}`));
    contador++
    qntdNumeroFaltante--
    }

alert(numero)

//========================================================================================================

        let idade = prompt('Qual sua idade? ')
 
if(idade >=18){
    let carteiraDeMotorista = prompt('Tem carteira de motorista? (Sim ou Não)');

        if (idade >= 18 && carteiraDeMotorista == 'Sim') {
            alert('Pode dirigir!');
        } else {
            alert('Tem idade para dirigir, porém precisa tirar a carteira.');
        } 
 } 
 else {
            alert('Menor de idade, espere completar 18');
 }

 //========================================================================================================
 
 let temIdade = prompt('Qual sua idade? ');
 let  emancipado = prompt('Tem documento de emancipação? (Sim ou Não)');
 
 if (temIdade>=18 || emancipado == 'Sim') {
    alert('Pode entrar!');
 } else {
    alert('Proibido a entrada.');
 }

 //========================================================================================================

 
 