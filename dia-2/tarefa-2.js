console.log('Melissa')
let nome
let idade
let cidade
let email
let altura


//vamos pular essa linha

//Atribuição de valores
let nomePrimeiro = 'Otacilio'
let idadeOtacilio = 37
let alturaAtual = 1.82
let cidadeResidencia = "caxambu"
let emailPrincipal = false
console.log(nomePrimeiro,idadeOtacilio,alturaAtual,cidadeResidencia,emailPrincipal)

console.log(nomePrimeiro, typeof(nomePrimeiro))
console.log(idadeOtacilio, typeof(idadeOtacilio))
console.log(cidadeResidencia, typeof(cidadeResidencia))
console.log(emailPrincipal, typeof(emailPrincipal))
console.log(alturaAtual, typeof(alturaAtual))

// Array
let lista = ['macarrão', 'batata', 'carne', nomePrimeiro, 23, true, [23,24]]
console.log(lista, typeof(lista))

//mapa
let mapa = {nome: 'Otacilio', idade: 37}
console.log(mapa, typeof(mapa))

let numero = 24
console.log(numero, typeof(numero))
numero = 'vinte e três'
console.log(numero, typeof(numero))

let nota1 = 8
let nota2 = 9

let media = (nota1 + nota2) /2
console.log('media:', media)

let resultado = 23 + 24
console.log('resultado:', resultado)

let num1 = 1
let num2 = '2'
let resultadoMaluco = num1 + num2
console.log('resultadoMaluco', resultadoMaluco)
let resultadocorreto = num1 - num2
console.log('resultadoCorreto', resultadocorreto)


//condicionais
let idadeJogador = 20

if (idadeJogador > 18){
   //se for verdade
   console.log('Pode jogar')
} else{
   //se não for verdade
   console.log('Não pode jogar')
}
