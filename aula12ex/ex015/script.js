function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtan')
    var res = document.querySelector('div#res')
    res.innerHTML = (` ${ano - Number(fano.value)}`)
    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = ''
            if (idade < 10){ 
                img.setAttribute('src', 'bb_M.png')
                genero = 'Criança'
        } else if (idade < 21){
            img.setAttribute('src', 'jovem_M.png')
            genero = 'jovem'
        } else if (idade < 50){
            img.setAttribute('src', 'adulto_M.png')
            genero = 'adulto'
        } else if (idade < 110){
                img.setAttribute('src', 'idoso_M.png')
                genero = 'idoso'
        } else{
            genero = 'Caveira'
            img.setAttribute('scr', 'caveira.png')
        }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
        }
        res.innerHTML = `${genero} com ${idade} Anos`
        res.appendChild(img)
    }
}
