let count =0

let value = document.getElementById('contador')


function incremento(){
    count++
    value.textContent = count
}

function decremento(){
    count--
    value.textContent = count
}