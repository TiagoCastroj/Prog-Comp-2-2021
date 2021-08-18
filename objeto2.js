let vetores = []

for (let i = 0; i < 2; i++) {
    let objeto = {
        nome: prompt("Informe o nome do produto"),
        qtde: prompt("Informe o qtde do produto"),
        preço: prompt("Informe o preço do produto")


    }
vetores.push(objeto)

}
let soma = 0
for (let i = 0; i < 2; i++) {
    soma = soma + vetores[i].preço
}

console.log(`A soma é de ${soma}`)

