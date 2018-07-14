/* Simón Dice: */
const levels = 15;

// Genera una secuencia de keyCodes aleatorios de teclas 'a' a la 'z'(65 a 90)
function generateKeys( levels ) {
    // Retorna un Array con los valores aleatorios en cada una de las posiciones definidas ( levels )
    return new Array( levels ) .fill( 0 ) .map( generateRandomKey );
    /* NOTA:
        - new Array( levels ): Instancia un Objeto de tipo 'Array' con una cantidad de posiciones definidas.
        - fill( 0 ): llena el Array con CEROS, eso se hace por que no se puede mapear un array vacío.
        - map( generateRandomKey ): 'Callback' con el que se mapean cada uno de los campos y se le asigna el valor retornado por el mismo.
    */
}

// Genera aleatoriamente un número entre 65 y 90
function generateRandomKey() {
    const minKeyCode = 65,      // a
          maxKeyCode = 90;      // z

    return Math .round( Math .random() * ( maxKeyCode - minKeyCode ) + minKeyCode );
}

// Obtiene el elemento HTML que tenga el keyCode respectivo
function getElementByKeyCode( keyCode ) {
    return document .querySelector( `[data-key="${keyCode}"]` );
}

// Activa estilo al presionar tecla de acuerdo al estado
function activateEl( keyCode, options = {} ) {
    const el = getElementByKeyCode( keyCode );
    el .classList .add( 'active' );         // Agrega una clase al listado de clases del elemento

    if( options .success ) {
        el .classList .add( 'success' );    // Agrega una clase al listado de clases del elemento
    }
    else if( options .fail ) {
        el .classList .add( 'fail' );       // Agrega una clase al listado de clases del elemento
    }

    // Temporizador para eliminar clases agregadas al elemento
    setTimeout( () => deactivateEl( el ), 1000 );
}

// Desactiva estilo al presionar tecla de acuerdo al estado
function deactivateEl( el ) {
    el .className = 'key';      // Elimina el listado de clases y define exclusivamente la clase 'key'
}

/* Prueba */
activateEl( 65 );                       // a
activateEl( 83, { success: true } );    // s
activateEl( 68, { fail: true } );       // d
console .log( 'Teclas generadas', keys = generateKeys( levels ) );
