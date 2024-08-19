function calcularSoma(n1, n2) {
    let soma = n1 + n2;
    let rs = soma.toLocaleString('pt-BR', { 
        style: 'currency', currency: 'BRL' 
    })
    return console.log('Resultado: ' + rs); // Formata como moeda
}
calcularSoma(200, 300)