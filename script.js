String.prototype.replaceAt=function(index, character) { return this.substring(0, index) + character + this.substring(index+character.length); };


const PAL = ['TUKPs', 'Papas', 'Carol', 'cepillo', 'colino', 'llorar', 'Luchar', 'perseverar', 'sipuedo'];
const BUT = document.getElementById('but');
const PARR = document.getElementById('pala');
const IMG = document.getElementById('imagen');
const RET = document.getElementById('ret');
let PALA= PAL [Math.floor((Math.random() * PAL.length))];
const LET= PALA.split(' ')
const RE = document.getElementById('resultado');
const BUTL = document.querySelectorAll('#letras button');
let error ;
let correcto ;

console.log(PALA) //Palabra que va a salir por consola
const mostrar_palabra = (()=>{
    for (let i = 0; i < PALA.length ; i++){
            const contenido_letra = document.createElement('span');
            PARR.appendChild(contenido_letra);
    }
});
const iniciar = () =>{ 
    for(let i = 0; i < BUTL.length; i++){
        BUTL[i].disabled = false;
    }
    RE.innerHTML = '';
    IMG.src = 'img0.png';
    error = 0;
    correcto = 0;
    document.getElementById('');
    PARR.innerHTML = '';
    mostrar_palabra();
};
const clicklet = (accion) =>{
    const span = document.querySelectorAll('#pala span');
    const button = accion.target;
    button.disabled = true;
    const letra = button.innerHTML.toUpperCase();
    const palabra = PALA.toUpperCase(); 
    let acerto = false;
    for (let i = 0; i <palabra.length; i++){
        if(letra == palabra[i]){
            acerto = true;//coincide con el span 
            span [ i ].innerHTML = letra;//muestra la letra
            correcto ++;
        }
    }
    if(acerto==false){//si la letra no existe, ES UN error
        error++;
        const source = `img${error}.png`;
        IMG.src = source;  
    } 
    if (error == 5){
        RE.innerHTML = ("Has perdido! :( la palabra era " + PALA );
        termina();
    }else if (correcto ==PALA.length){
        RE.innerHTML = "FELICIDADESSS!!:) SI SE PUDO BURRO";
        termina();
    }
};
for(let i = 0; i < BUTL.length; i++){
    BUTL[i].addEventListener('click', clicklet);
}
const termina =()=>{ 
    for(let i = 0; i < BUTL.length; i++){
        BUTL[ i ].disabled = true;
    }
    BUT.disabled = false;
};
termina();
BUT.addEventListener('click', iniciar);
