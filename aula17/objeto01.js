let amigo = {Nome: 'João', 
sexo: 'M', 
peso: 85.4, 
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(10)
console.log(`${amigo.Nome} pesa ${amigo.peso}Kg`)