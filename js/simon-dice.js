/* Simón Dice: */

// Obtiene el elemento HTML que tenga el keyCode respectivo
function getElementByKeyCode( keyCode ) {
    return document .querySelector( `[data-key="${keyCode}"]` );
}
/* keyCode 65 representa a la */
const el = getElementByKeyCode( 65 );  // a
console .log( el );
