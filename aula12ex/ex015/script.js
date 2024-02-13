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
        if (fsex[0].checked) {
            genero = 'Homen'
        } else if (fsex[1].checked) {
            genero = 'Mulher'
        }
        res.innerHTML = `${genero} com ${idade} Anos`
    }
}
