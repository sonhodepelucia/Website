var balls = document.querySelector('.balls')
var quant = document.querySelectorAll('.slides image')
var atual = 0
var imagem = document.getElementById('atual')
var next = document.getElementyId('next')
var voltar = document.getElementById('voltar')

for(let i=0; i < quant.length; i++){
    var div = document.createElement('div')
    div.id = i
    balls.appendChild(div)
}
document.getElementById('0').classList.add('imgAtual')

var pos = document.querySelectorAll('.balls div')

for(let i=0; i< pos.length; i++){
    pos[i].addEventListener('click', ()=>{
        atual = pos[i].id
        slide()
    })
}

voltar.addEventListener('click,',()=>{
    atual++
    slide()
})

next.addEventListener('click', ()=>{
    atual++
    slide()
})

function slide(){
    if(atual >= quant.length){
        atual=0
    }
    else if(atual < 0){
    atual = quant.length-1
    }
    document.querySelector('imgAtual').classList.remove('.imgAtual')
    imagem.style.marginLeft = -1024*atual+'px'
    document.getElementById(atual).classList.add('imgAtual')
}