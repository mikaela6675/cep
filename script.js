const form = document.getElementById('formCep');
const botao = document.getElementById('botao');
const textoBotao = document.getElementById('textoBotao');
const carregando = document.getElementById('carregando');
const resultado = document.getElementById('resultado');
const numeroCep = document.getElementById('numeroCep');
const enderecoCompleto = document.getElementById('enderecoCompleto');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const rua = document.getElementById('rua').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    
    if (!rua || !cidade || !estado) {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    
    // Mostrar carregando
    textoBotao.style.display = 'none';
    carregando.style.display = 'inline';
    botao.disabled = true;
    
    // Gerar CEP aleatório
    setTimeout(function() {
        const cepGerado = gerarCEP();
        
        // Mostrar resultado
        numeroCep.textContent = cepGerado;
        enderecoCompleto.textContent = rua + ', ' + cidade + ' - ' + estado;
        resultado.style.display = 'block';
        
        // Voltar botao ao normal
        textoBotao.style.display = 'inline';
        carregando.style.display = 'none';
        botao.disabled = false;
    }, 1000);
});

function gerarCEP() {
    const num1 = Math.floor(Math.random() * 90000) + 10000;
    const num2 = Math.floor(Math.random() * 900) + 100;
    return num1 + '-' + num2;
}