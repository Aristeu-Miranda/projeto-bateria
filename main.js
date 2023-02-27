const listaDeTeclas = document.querySelectorAll('.tecla');

const tocaSom = (idElemento) => {
    const elemento = document.querySelector(idElemento);
    if (elemento && elemento.localName === 'audio') {
        elemento.play()
    }else {
        console.log('Elemento não encontrado!')
    }
}

for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1]; 
    const idAudio = `#som_${instrumento}` 
    listaDeTeclas[i].onclick = () => tocaSom(idAudio);
    
    //Evento com teclado
    tecla.onkeydown = (e) => {
        if(e.code === 'Space' || e.code === 'Enter') {
            tecla.classList.add('ativa')
        } 
        tecla.onkeyup = () => tecla.classList.remove('ativa');
    }
    
}