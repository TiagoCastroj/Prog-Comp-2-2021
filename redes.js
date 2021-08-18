let gerenciaRedessociais = () => {
    let vetorRede = []
    for (let i= 0; i<5; i++){
        let objeto = {
            codigo: Number(prompt('Qual o codigo da RS?')),
            Nome: prompt('Qual o nome?'),
            link: prompt('E qual o link?')

        }
        vetorRede.push(objeto)
    }
    //cadastro users
    let vetorUser = []
    for (let i= 0; i<5; i++){
        let usuario = {
            login: prompt(`Qual o seu login usuario`),
            nome: prompt(`Qual o nome do usuario?`),
            CodigoRede: prompt(`Qual o codigo da rede social?`),
            QtdePosts: Number(prompt(`Qual a qtd de posts?`))
        }
        let achou = false // nao encontrou a rs
        let j = 0 // indice do vetor de rede
        while(!achou && j<5){
            if (vetorRede[j].codigo == objeto.CodigoRede){
                vetorUser.push(usuario)
                achou = true
                alert(`Usuario inserido com sucesso`)
            }
            j++
        }
        if (!achou){
            alert(`Rede social nao encontrada`)
        }
    
    }
// Usuario informa a rede social e o programa retorna qts posts foram feitos
// o programa retorna quanto posts foram feitos em todas as redes cosiais
// o usuario informa o login do usuario e o programa retorna quantos posts ele fez
//  o programa retorna quantos posts foram feitos por cada usuário

    
    

}

