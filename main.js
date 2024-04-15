const form = document.getElementById('form-atividade');
const imgPositivo = '<img src="./img/positivo-simbolo.jpg" alt="emoji positivo"/>';
const imgNegativo = '<img src="./img/negativo-simbolo.jpg" alt="emoji negativo"/>';
const atividades = [];
const notas = [];
const spanPositivo= '<span class="resultado Positivo">Positivo</span>';
const spanNegativo = '<span class="resultado Negativo">Negativo</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima:"));

let linhas = '';  

form.addEventListener ('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});
function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');
 
    if(atividades.includes(inputNomeAtividade.value)) {
      alert(`Atividade: ${inputNomeAtividade.value} ja foi inserida`); 
      return;
    } else {    
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
    
    let linha = '<tr>'; //add abrindo
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgPositivo : imgNegativo}</td>`;
    linha += '</tr>';

    linhas += linha;
}

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
    }

    function atualizaTabela() {
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
    }
    function atualizaMediaFinal() {
        const mediaFinal = calculaMediaFinal();
      
        document.getElementById('media-final-valor').innerHTML = mediaFinal;
        document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanPositivo : spanNegativo;
    }
    
    function calculaMediaFinal() {
        let somaDasNotas = 0;

        for (let i = 0; i < notas.length; i++) {
            somaDasNotas += notas[i];
        }

        return somaDasNotas / notas.length; 
    }

