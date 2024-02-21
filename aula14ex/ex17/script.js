function gerar(){
    let num = document.getElementById('txtn1')
    let tab = document.getElementById('cop')
    if (num.value.length == 0){
        alert('Campo vazio')
    } else{
        tab.size = "10"
        tab.innerHTML = ''
        let n = (num.value)
        let c = 1
        while(c <= 10){
            let item = document.createElement("option")
            item.text =`${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}
