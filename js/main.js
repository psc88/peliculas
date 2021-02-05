const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// ------ ------ Event Listener para la flecha derecha. ------ ------

flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;


    //guardamos el estado activo en la variable
    const indicadorActivo = document.querySelector('.indicadores .activo')
        //con nextSibling preguntamos si hay un elemento a la derecha
    if (indicadorActivo.nextSibling) {
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});

// ------ ------ Event Listener para la flecha izquierda. ------ ------
flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if (indicadorActivo.previousSibling) {
        indicadorActivo.previousSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});

// ------ ------ Paginacion ------ ------
//math.ceil es para redondear hacia arriba
const numeroPaginas = Math.ceil(peliculas.length / 5);
for (let i = 0; i < numeroPaginas; i++) {
    const indicador = document.createElement('button');

    if (i == 0) {
        indicador.classList.add('activo');
    }

    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e) => {
        // esto es para que segun donde nos posicionemos en el cuadrito se va a mover el scroll, el fila.off es justamente multiplcar la fila por el ancho de la fila
        fila.scrollLeft = i * fila.offsetWidth;

        //accedemos a la clase que tiene activo, e eliminamos la clase activo 
        document.querySelector('.indicadores .activo').classList.remove('activo');
        // accedemos al indicador que fue clickeado y ponerlo en activo
        e.target.classList.add('activo');
    });
}

// ------ ------ hover ------ ------
//por cada pelicula ejecutamos el codigo, obtenemos el elemento (linea:60)
peliculas.forEach((pelicula) => {
    //por cada elemento tenemos un eventlistener
    pelicula.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        //despues de un tiempo ejecuta el siguiente codigo, lo que hace es buscar todas las peliculas y por cada una de ella quita el hover para que no quede marcado, y luego agrege el hover al elemento donde pasamos el cursor.
        setTimeout(() => {
            peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 300);
    });
});
// para sacar el hover si no salimos de la fila ya que sino, quedara puesto si no pasamos a otra imagen.
fila.addEventListener('mouseleave', () => {
    peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});