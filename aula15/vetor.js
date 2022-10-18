let num = [8, 1, 7, 4, 2, 9]
/*
for(chave=0; chave < num.length; chave++){
    console.log(`A posicao ${chave} tem o valor ${num[chave]}`)
}*/

for(let chave in num){
    console.log(`A posicao ${chave} tem o valor ${num[chave]}`)
}

console.log(num.indexOf(2))