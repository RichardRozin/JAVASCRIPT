function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')

    if (fano.value > ano){
        window.alert(`O ano de nascimento nao pode sem maior que ${ano}.`)
    }else{
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'crianca-menino.jpeg')
            }else if(idade >= 10 && idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem-menino.jpeg')
            }else if(idade < 60){
                //adulto
                img.setAttribute('src', 'homem-menino.jpeg')
            }else{
                //idoso
                img.setAttribute('src', 'idoso-menino.jpeg')
            }

            }else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //crianca
            }else if(idade >= 10 && idade < 21){
                //Jovem
            }else if(idade < 60){
                //adulto
            }else{
                //idoso
            }
        }
        res.appendChild(img)
        
    }
}