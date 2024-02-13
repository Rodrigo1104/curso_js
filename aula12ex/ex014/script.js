function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var msgd = document.getElementById('msgd')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}h`
    if (hora >= 0 && hora < 12){
        img.src = 'manha.png'
        msgd.innerHTML = 'Bom dia'
        document.body.style.background = 'hwb(189 7% 4%)'
    } else if (hora >=12 && hora < 18){
        img.src = 'tarde.png'
        msgd.innerHTML = 'Boa tarde'
    }else {
        //Boa noite
        img.src = 'noite.png'
        msgd.innerHTML = '_Boa noite'
        document.body.style.background = 'hwb(35 0% 91%)'
    }
}