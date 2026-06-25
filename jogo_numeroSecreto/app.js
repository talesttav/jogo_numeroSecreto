alert('Boas vindas ao jogo do número secreto');
let chute ;
let tentativas = 1;
let numeroMaximo;

let nivelDificuldade = prompt(
    'Qual nível de dificuldade deseja no jogo? (Fácil, Médio ou Difícil)'
).toLowerCase().trim();
    if (nivelDificuldade == 'fácil' || nivelDificuldade == 'facil' || nivelDificuldade == 'f'){ 
        numeroMaximo = 10;          
    } else if (nivelDificuldade == 'médio' || nivelDificuldade == 'medio' || nivelDificuldade == 'm' ) {
        numeroMaximo = 100;
    } else if( nivelDificuldade == 'difícil' || nivelDificuldade == 'dificil' || nivelDificuldade == 'd') {
        numeroMaximo = 1000;
    } else {
        alert('Dificuldade inválida! O jogo será iniciado no modo Fácil.');
        numeroMaximo = 10;
    }
    let numeroSecreto = Math.floor(Math.random()* numeroMaximo) + 1;
    console.log (numeroSecreto);

//enquanto o número não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = Number(prompt(`Escolha um número entre 1 e ${numeroMaximo}`));

    if (isNaN(chute)) {
        alert('Digite apenas números!');
        continue;
    }

    if (chute < 1 || chute > numeroMaximo) {
        alert(`Digite um número entre 1 e ${numeroMaximo}!`);
        continue;
    }

    if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
        tentativas++;
    } else if (chute < numeroSecreto) {
        alert(`O número secreto é maior que ${chute}`);
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ?'tentativas' : 'tentativa' ;
    alert(`Isso aí! Você descobriu o número secreto (${numeroSecreto}) em ${tentativas} ${palavraTentativa}`);
