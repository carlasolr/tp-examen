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