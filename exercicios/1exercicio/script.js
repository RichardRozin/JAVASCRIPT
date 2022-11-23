function carregar(){
    var txt = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    if (hora < 12){
        txt.innerHTML = `Agora sao  ${hora} horas`
        img.src = 'imagens/foto-manha.jpeg'
        document.body.style.background = '#e2cd9f' 

    }else if(hora < 18){
        txt.innerHTML = `Agora sao  ${hora} horas`
        img.src = 'imagens/foto-tarde.jpeg'
        document.body.style.background = '#d9846f' 
        
    }else{
        txt.innerHTML = `Agora sao  ${hora} horas`
        img.src = 'imagens/foto-noite.jpeg'
        document.body.style.background = '#515154' 
    }
}