// let camisaPolo = {"nome": "camiseta", "valor": 100.00, "internacional": true};
// let camisetaRegata = {"nome": "perfume", "valor": 200.00, "internacional": true};
// let bermudaSimples = {"nome": "sandália", "valor": 120.00, "internacional": false};


// if (camisaPolo.internacional == true) {
//     //executa se for verdadeiro
//     let preco = camisaPolo.valor
//     //20% == 0.2
//     let imposto = 0.2
    
//     let valorComImposto = preco + preco * imposto

//     console.log("O produto é internacional")
//     console.log("O valor com impostos é: ",valorComImposto)

// }else {
//     //executa se for falso
//     let preco = camisaPolo.valor
//     //12% == 0.12
//     let imposto = 0.12
    
//     let valorComImposto = preco + preco * imposto
//     console.log("O produto é nacional")
// }   

// if (camisetaRegata.internacional == true) {
//     //executa se for verdadeiro
//     let preco = camisetaRegata.valor
//     //20% == 0.2
//     let imposto = 0.2

//     let valorComImposto = preco + preco * imposto

//     console.log("O produto é internacional")
//     console.log("O valor com imposto é: ",valorComImposto)

// }else {
//     //executa se for falso
//     console.log("0 produto é nacional")
//     console.log("O valor com imposto é: ", camisetaRegata.valor + camisetaRegata.valor * 0.12)
// }

// if (bermudaSimples.internacional == true) {
//     //executa se for verdadeiro
//     let preco = bermudaSimples.valor
//     //20% == 0.2
//     let imposto = 0.2
    
//     let valorComImposto = preco + preco * imposto

//     console.log("O produto é internacional")
//     console.log("O valor com impostos é: ",valorComImposto)

// }else {
//     //executa se for falso
//     let preco = bermudaSimples.valor
//     //12% == 0.12
//     let imposto = 0.12
    
//     let valorComImposto = preco + preco * imposto

//     console.log("O produto é nacional")
//     console.log("O valor com imposto é: ",valorComImposto)



// FUNÇÕES - COMEÇO
// declarando a função
// function imprimirNome() {
//     //o código que vem aqui dentro é executado quando eu chamo a função.
//     console.log("Otacílio está programando.")
// }

// //chamando a função
// imprimirNome()
// console.log("Ele está começando a entender.")

// function somar(x, y) {
//     console.log("O primeiro número é: ", x)
//     console.log("O segundo número é: ", y)
//     console.log("A soma é: ", x + y)

// cd codigo

//INTERAÇÃO (LOOP)
let família = [
   {'nome': 'Otacílio' 'Pai', true,  'idade': 70}
   {'nome': 'cida' 'mãe': true, 'idade': 68}
   {'nome': 'Edson' 'filho': true, 'idade': 50}
   {'nome': 'Elaine' 'filha': true, 'idade': 43}
   {'nome': 'Otacílio' 'Filho': true, 'idade': 37}
   {'nome': 'Ellen' 'filha': true, 'idade': 35}
   {'nome': 'Mario' 'filho': false, 'idade' 36}
]
console.log(família)
for (let i = 0; i < 7; i++) {
// o código que estiver aqui será repetido até o contador obedecer a condição
// será repetido até 1 < 9, nesse caso.
console.log(família[i].nome)



