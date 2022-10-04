var hora = new Date()
var agora = hora.getHours()
var minutos = hora.getMinutes()
console.log(`Agora sao exatamente ${agora} horas e ${minutos} minutos.`)
if (agora < 12){
    console.log('Bom dia!')
} else if(agora < 18){
    console.log('Boa tarde!')
}else{
    console.log('Boa noite!')
}