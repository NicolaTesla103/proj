const botoes = document.querySelectorAll('.botao');
const desc = document.querySelectorAll('.aba-conteudo');

for(let i=0;i <botoes.length;i++){ 
    botoes[i].onclick = function() {
        for(let j=0;j<botoes.length;j++) { 
            botoes[j].classList.remove('ativo');
            desc[j].classList.remove('ativo');
        }
        
        desc[i].classList.add('ativo');
        botoes[i].classList.add('ativo');
    }
}