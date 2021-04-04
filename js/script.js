
const resultado = document.getElementsByClassName('resultado')[0];
const limpar = document.getElementById('limpar');
limpar.addEventListener('click', function() {
    document.getElementsByClassName('resultado')[0].value = ''
})

// operadores

const somar = document.getElementById('somar');
somar.addEventListener('click', function() {
    resultado.value += '+'
})

const subtrair = document.getElementById('subtrair');
subtrair.addEventListener('click', function() {
    resultado.value += '-'
})

const multiplicar = document.getElementById('multiplicar');
multiplicar.addEventListener('click', function() {
    resultado.value += '*'
})

const dividir = document.getElementById('dividir');
dividir.addEventListener('click', function() {
    resultado.value += '/'
})

const igual = document.getElementById('igual');
igual.addEventListener('click', function() {
    resultado.value = eval(resultado.value)
})

// numeros
const n1 = document.getElementById('n1');
n1.addEventListener('click', function() {
    resultado.value += n1.value
})

const n2 = document.getElementById('n2');
n2.addEventListener('click', function() {
    resultado.value += n2.value
})

const n3 = document.getElementById('n3');
n3.addEventListener('click', function() {
    resultado.value += n3.value
})

const n4 = document.getElementById('n4');
n4.addEventListener('click', function() {
    resultado.value += n4.value
})

const n5 = document.getElementById('n5');
n5.addEventListener('click', function() {
    resultado.value += n5.value
})

const n6 = document.getElementById('n6');
n6.addEventListener('click', function() {
    resultado.value += n6.value
})

const n7 = document.getElementById('n7');
n7.addEventListener('click', function() {
    resultado.value += n7.value
})

const n8 = document.getElementById('n8');
n8.addEventListener('click', function() {
    resultado.value += n8.value
})

const n9 = document.getElementById('n9');
n9.addEventListener('click', function() {
    resultado.value += n9.value
})

const n0 = document.getElementById('n0');
n0.addEventListener('click', function() {
    resultado.value += n0.value
})