var idade = 22
console.log(`Voce tem ${idade} anos.`)
if (idade < 16){
    console.log('Nao vota!')

}else if (idade >= 16 && idade < 18 || idade >= 65){
    console.log('Voto opcional')
}else{
        console.log('Voto obrigatiro!')
    }

