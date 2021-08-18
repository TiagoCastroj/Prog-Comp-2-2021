let gerenciaRedessociais = () => {
    let vetorRede = []
    for (let i = 0; i < 5; i++) {
        let objeto = {
            codigo: Number(prompt('Qual o codigo da RS?')),
            Nome: prompt('Qual o nome?'),
            link: prompt('E qual o link?')

        }
        vetorRede.push(objeto)
    }
    //cadastro users
    let vetorUser = []
    for (let i = 0; i < 5; i++) {
        let usuario = {
            login: prompt(`Qual o seu login usuario`),
            nome: prompt(`Qual o nome do usuario?`),
            CodigoRede: prompt(`Qual o codigo da rede social?`),
            QtdePosts: Number(prompt(`Qual a qtd de posts?`))
        }
        let achou = false // nao encontrou a rs
        let j = 0 // indice do vetor de rede
        while (!achou && j < 5) {
            if (vetorRede[j].codigo == objeto.CodigoRede) {
                vetorUser.push(usuario)
                achou = true
                alert(`Usuario inserido com sucesso`)
            }
            j++
        }
        if (!achou) {
            alert(`Rede social nao encontrada`)
        }
        let numero = Number(prompt('informe o cod da rede social'))
        //percorre vetor
        let conta = 0
        for (let i = 0; i < 5; i++) // vetor user
        {
            if (vetorUser[i].codigo == conta) {
                conta = conta + vetorUser[i].QtdePosts
            }
        }
        if (conta = 0) {
            console.log(`Nao houve postagem ou a rede social nao existe`)
        }
        else {
            console.log(`A qtd de post na rede social ${codigo} foi ${conta}`)
        }
        for (let i = 0; i < 5; i++) {
            let conta = 0
            for (let j = 0; j < 5; j++){
                if (vetorRede[i].codigo == vetorUser[j].CodigoRede{
                    conta = conta + vetorUser[i].QtdePosts
                }
            }
            console.log(`A qtd de posts de uma rede social  ${vetorRede[i].codigo} é ${conta}`)
        }

    }
    // Usuario informa a rede social e o programa retorna qts posts foram feitos
    // o programa retorna quanto posts foram feitos em todas as redes cosiais
    // o usuario informa o login do usuario e o programa retorna quantos posts ele fez
    //  o programa retorna quantos posts foram feitos por cada usuário




}

