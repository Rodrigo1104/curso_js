var idade = Number.input
if (idade < 16){
    console.log('no vota')
} else if (idade < 18 || idade > 65) {
        console.log('vota se quiser')
} else {
        console.log('Votar vagabundo')
}