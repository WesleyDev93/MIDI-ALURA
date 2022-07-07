function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
        
      
     if (elemento != null && elemento.localName === 'audio' ) {
                    elemento.play ();
     }
        else {
            
            console.log('elemento não encontrado ou seletor invalido');

        }
    }


// const = referencia
const listaDeTeclas = document.querySelectorAll('.tecla');



// While = enquanto = laço para alguma condição

for ( let contador = 0; contador < listaDeTeclas.length;contador ++){
   
    const tecla =  listaDeTeclas [contador];
    const instrumento = tecla.classList[1];
    
// Template Script

const idAudio = `#som_${instrumento}`;

    tecla.onclick = function() {
        tocaSom(idAudio);
    }
    

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter' ){
        tecla.classList.add ('ativa');
        }
       
    
    }
    tecla.onkeyup = function (){
        tecla.classList.remove ('ativa');
    }

    //teste console.log( nome do que quer testar);
    
}