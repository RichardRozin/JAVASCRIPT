function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var txt = document.getElementById('txt')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas`
    if (hora >= 0 && hora < 12){
        img.src = 'fotomanha.jpeg'
        txt.innerHTML = 'Bom dia!'
        document.body.style.background = '#e2cd9f' 
    }else if(hora >= 12 && hora <18){
        img.src = 'fototarde.jpeg'
        txt.innerHTML = 'Boa tarde!'
        document.body.style.background = '#b9846f'
    }else{
        img.src = 'fotonoite.jpeg'
        txt.innerHTML = 'Boa noite!'
        document.body.style.background = '#515154'
    }
}
