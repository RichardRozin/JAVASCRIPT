var num = document.getElementById('fnum')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []

function isnumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inlista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if (isnumero(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value))
        
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado na lista.`
        lista.appendChild(item)
        res.innerHTML = ''
        
    }else{
        window.alert('Valor invalido ou ja encontrado na lista!')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0

        for (c=0; c < valores.length; c++){
            soma += valores[c]
            if (valores[c] > maior){
                maior = valores[c]
            } if (valores[c] < menor){
                menor = valores[c]
            }
        }

        var media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} numeros na lista. <p/>`
        res.innerHTML += `<p>O maior valor digitado foi ${maior}.<p/>`
        res.innerHTML += `<p>O menor valor digitado foi ${menor}.<p/>`
        res.innerHTML += `<p>A soma entre todos os numeros é ${soma}.<p/>`
        res.innerHTML += `<p>A media entre todos os numeros é ${media}.<p/>`
    }
}