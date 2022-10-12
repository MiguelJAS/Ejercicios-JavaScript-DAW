//Ejercicio 7
window.onload = function(){

    const CASA = "casa";
    const MESA = "mesa";
    const PERRO = "perro";
    const GATO = "gato";

    const casaIngles = "house";
    const mesaIngles = "table";
    const perroIngles = "dog";
    const gatoIngles = "cat";

    function mensaje(palabra){
        console.log(palabra);
    }
    let palabra = prompt('Introduce la palabra a traducir: ');
    switch(palabra.toLocaleLowerCase){
        case CASA: mensaje(casaIngles); break;
        case MESA: mensaje(mesaIngles); break;
        case PERRO: mensaje(perroIngles); break;
        case GATO: mensaje(gatoIngles); break;
        default: console.log('Palabra incorrecta')
    }

}