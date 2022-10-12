window.onload = function(){
    let array = new Array(10);
    let longitudSubsecuencia = 1;
    let contadorDefinitivo = 0;
    for (let index = 0; index < array.length; index++) {
        array[index] = prompt("Introduce un numero: ");        
    }
    for (let index = 0; index < array.length; index++) {
        if(array[index] == array[index + 1]){
            longitudSubsecuencia++; 
            if(longitudSubsecuencia > contadorDefinitivo){
                contadorDefinitivo = longitudSubsecuencia;
            }
            contadorDefinitivo = longitudSubsecuencia;       
        }else{
            longitudSubsecuencia = 1;
        }
    }
    console.log(contadorDefinitivo);

    }
