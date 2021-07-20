let elementoFrase = document.querySelector('#frase')
let elementoImg = document.querySelector('#imagem')
let elementoBtn = document.querySelector('#botao')

elementoBtn.addEventListener('click', () =>{
    
    if(elementoBtn.value == 'primeiro'){
        elementoImg.src = './assets/img/assustado.png'
        elementoFrase.innerText = 'Homer assustado!'
        elementoBtn.value = 'segundo'
    }

    else if(elementoBtn.value == 'segundo'){
        elementoImg.src = './assets/img/bravo.png'
        elementoFrase.innerText = 'Homer bravo!'
        elementoBtn.value = 'terceiro'
    }

    else if(elementoBtn.value == 'terceiro'){
        elementoImg.src = './assets/img/feliz.png'
        elementoFrase.innerText = 'Homer feliz! Uhuul'
        elementoBtn.value = 'quarto'
    }

    else if(elementoBtn.value == 'quarto'){
        elementoImg.src = './assets/img/triste.png'
        elementoFrase.innerText = 'Homer triste!'
        elementoBtn.value = 'quinto'
    }

    else if(elementoBtn.value == 'quinto'){
        elementoImg.src = './assets/img/bebado.png'
        elementoFrase.innerText = 'Homer sextou!'
        elementoBtn.value = 'sexto'
    }

    else if(elementoBtn.value == 'sexto'){
        elementoImg.src = './assets/img/normal.png'
        elementoFrase.innerText = 'Homer normal!'
        elementoBtn.value = 'primeiro'
    }
})