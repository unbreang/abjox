let arroz = document.querySelector('.arroz')
let feijao = document.querySelector('.feijao')

arroz.addEventListener('click', function(){
    let turi = document.querySelectorAll('.turi')
    document.querySelector('.fila').appendChild(turi[0])
})

feijao.addEventListener('click', function(){
    let turi = document.querySelectorAll('.turi')
    document.querySelector('.fila').prepend(turi[turi.length-1])
})
   