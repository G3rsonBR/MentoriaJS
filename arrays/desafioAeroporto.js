const voosDisponiveis = [{
  numero: "v001",
  partida: "Brasil",
  chegada: "New York",
  horarioPartida: "12:30",
  horarioChegada: "00:50",
  preco: 1200.00,
  assento: [
    {
      fileira: "A",
      coluna: 1,
      passageiro: null,
    },
  ],
}]

function comprarPassagem(passageiro, identificacao, assento) {
    let vooEncontrado = null
    voosDisponiveis.forEach((item) => {
            if(item.numero == identificacao){
                return vooEncontrado = item
            }
        }
    )
    if(!vooEncontrado) return console.log(`Não foi encontrado o voo ${identificacao}`)
    
    let assentoEncontrado = null
    vooEncontrado.assento.forEach((poltrona) => {
        const idPoltrona = poltrona.fileira + poltrona.coluna
        if(idPoltrona == assento){
            assentoEncontrado = poltrona
        }
    })
    if(!assentoEncontrado) return console.log(`Poltrona não encontrada: ${assento}`)
    if(assentoEncontrado.passageiro !== null) return console.log(`Essa poltrona já possuí um passageiro: ${assento}, ${assentoEncontrado.passageiro}`)
    assentoEncontrado.passageiro = passageiro;
    return `Passagem comprada para:\nNome: ${passageiro}\nAssento: ${assento}\nVoo: ${identificacao}`
}


let passagemComprada = comprarPassagem("Gerson", "v001", "A1");
console.log(passagemComprada)