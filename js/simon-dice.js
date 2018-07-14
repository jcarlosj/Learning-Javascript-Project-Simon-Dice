/* Simón Dice: */

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
