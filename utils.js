/*
define la disponibilidad de un libro al identificar el ultimo elemento de la 
propiedad 'pedidos' que posee cada libro, la cual posee la fecha en que el libro
fue alquilado y el estado (si esta disponible o no). la funcion se ubica en el
estado y de acuerdo a cual sea este, devuelve un string avisando la disponibilidad
(o no) del libro
*/
function laDisponibilidadEnCuestion(elLibro) {
	const elResultado = elLibro.pedidos[elLibro.pedidos.length - 1]
	let disponibilidad = ``

	switch(elResultado.estado){
		case 'disponible':
			disponibilidad = `El libro que ingresaste esta ${elResultado.estado}!`				
			break
		case 'no disponible':
			disponibilidad = `El libro que ingresaste lamentablemente esta ${elResultado.estado} dado que aun no fue devuelto`	
			break
	}
	return disponibilidad
}