let txtnum = document.getElementById('idnumber')
let lista = [10]//document.querySelector('select#conteine')
let res = document.querySelector('div#res')
let valores = [3, 5, 8, 10, 1]


function isNUMERO(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}


function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}


function adicionar(){
    if(isNUMERO(txtnum.value) && !inLista(txtnum.value, valores)){
        valores.push(Number(txtnum.value))
        let item = document.createElement('option')
        item.text = `Valor ${txtnum.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor INVALIDO, OU ja cadastrado')
    }
    txtnum.value = ''
    txtnum.focus()
}



function finalizar(){
    if (lista.length == 0){
        alert('Adicione valores primeiro')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            media = soma / valores.length 
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        res.innerHTML = ''
        res.innerHTML +=`<p>Foram Cadastrados ${tot} Numeros</p>`
        res.innerHTML +=`<p>O menos valor ${menor} e o maior é  ${maior}</p>`
        res.innerHTML +=`<p>Soma de todos os valores ${soma}`
        res.innerHTML +=`<p>Media dos valores é ${media}`


    }
}

