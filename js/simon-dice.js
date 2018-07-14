/* Simón Dice: */
const levels = 15;
let keys = generateKeys( levels );

// Siguiente nivel
function nextLevel( currentLevel ) {
    console .log( 'nextLevel( 6 ) debe mostrar ', currentLevel + 1, ' teclas' );

    // Valida si se ha superado el
    if( currentLevel == levels ) {
        return alert( 'Wow! Excelente has ganado!' );       // return detiene la ejecución
    }

    alert( `Nivel ${ currentLevel + 1 }` );                 // Muestra el nivel actual
    /* Juego: Muestra la secuencia de teclas por nivel al jugador */
    for( let i = 0; i <= currentLevel; i++ ) {
        setTimeout( () => activateEl( keys[ i ] ), 1000 * ( i + 1 ) );
    }

    /* Juego: espera que el jugador presione la primera tecla */
    let ronda = 0,
        currentKey = keys[ ronda ];
    // Agrega manejador de eventos
    window .addEventListener( 'keydown', onkeydown );

    // Internal Function: Valida cuando una tecla es presionada
    function onkeydown( event ) {
        // Valida si la tecla presionada es igual a la actual en la secuencia generada
        if( event .keyCode == currentKey ) {
            activateEl( currentKey, { success: true } );                // Activa el estilo 'success' por que acerto
            ronda++;                                                    // Avanza a la siguiente ronda
            if( ronda > currentLevel ) {                                // Valida el que la ronda sea mayor que el nivel (en la secuencia)
                window .removeEventListener( 'keydown', onkeydown );    // Elimina el manejador de eventos
                setTimeout( () => {
                    nextLevel( ronda );                                 // Avanza al siguiente nivel
                }, 1500 );
            }
            currentKey = keys[ ronda ];                                 // Reasigna la tecla actual de la secuencia de teclas generadas (la siguente en la secuencia)
        }
        else {
            activateEl( event .keyCode, { fail: true } );               // Activa el estilo 'fail' por que falló
            window .removeEventListener( 'keydown', onkeydown );        // Elimina el manejador de eventos
            alert( 'Lo siento, perdiste. Vuelve a intentarlo!' );
        }
    }
}

/* Pruebas */
nextLevel( 0 );       // Nivel 1 (El inicio del juego)
//nextLevel( 6 );       // Nivel 7
//nextLevel( 15 );      // Nivel 16 (no existe, has ganado)


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
