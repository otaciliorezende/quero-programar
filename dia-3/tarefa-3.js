// console.log("Melissa")
// console.log("Meu eterno amor")

// let roupas
// let cartão
// let alimentação
// let gasto

// //Vai pular uma linha 
// let roupasNova = 'bermudas'
// let cartãoCredito = 1500
// let alimentaçãoPorDia = ('arroz', 'feijao', 'bife')

// let valorDoGasto = roupas + cartão + alimentação *gasto

// console.log("valorDoGasto é: ", valorDoGasto)

let bikeNova = {"nome": "quadro", "valor":2300.00, "internacional": true};
let carroPopular = {"nome": "gasolina", "valor": 30200.00, "internacional": true};
let apartamentoNovo = {"nome": "comodos", "valor": 150000.00, "internacional": false};


if (apartamentoNovo.internacional == true) {
    //executa se for verdadeiro
    let preco = apartamentoNovo.valor
    //20% == 0.2
    let imposto = 0.2
    
    let valorComImposto = preco + preco * imposto

    console.log("O produto é internacional")
    console.log("O valor com impostos é: ",valorComImposto)

}else {
    //executa se for falso
    let preco = apartamentoNovo.valor
    //12% == 0.12
    let imposto = 0.12
    
    let valorComImposto = preco + preco * imposto
    console.log("O produto é nacional")
    console.log("O valor com impostos é: ",valorComImposto )
}