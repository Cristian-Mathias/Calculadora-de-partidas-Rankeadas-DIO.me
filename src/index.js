console.log("Calculadora de partidas Rankeadas")

//inserir quantidade de vitórias e derrotas.
let vitoriaDerrota=calcular(20,10) 
let rank=nivel()

// Foi adcionado o (=0), no parâmetro (vitoria,derrota) para evitar o erro (NaM,deundefined), caso o usuário não coloque os dois parâmetros na variável (let vitoriaDerrota).Exemplo do erro (O Herói tem de saldo de NaN está no nível deundefined).
function calcular (vitoria=0,derrota=0){
    let saldoRank = vitoria-derrota
    return saldoRank   
}
function nivel(){
    if(vitoriaDerrota<=10){
        let rank=" ferro."
        return rank
    }else if(vitoriaDerrota>=11 && vitoriaDerrota<=20){
        let rank=" bronze."
        return rank
    }else if(vitoriaDerrota>=21 && vitoriaDerrota<=50){
        let rank=" prata."
        return rank
    }else if(vitoriaDerrota>=51 && vitoriaDerrota<=80){
        let rank=" ouro."
        return rank
    }else if(vitoriaDerrota>=81 && vitoriaDerrota<=90){
        let rank=" diamante."
        return rank
    }else if(vitoriaDerrota>=91 && vitoriaDerrota<=100){
        let rank=" lendário."
        return rank
    }else if(vitoriaDerrota>=101){
        let rank=" imortal."
        return rank
    }
}
console.log("O Herói tem de saldo de "+vitoriaDerrota+" está no nível de"+rank)