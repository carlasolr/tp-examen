/*
Esta funcion recibe la lista de objetos libros y un numero que representa al
codigo ISBN que identifica a los ejemplares. Se define una variable objeto, 
luego se recorre la lista, identifica al elemento libro, constrasta el parametro numerico con el ISBN del libro 
en cuestion y si estos coinciden, se le cargan propiedades del libro a la variable del principio
y se muestra. Una de estas propiedades esta definida con el llamado a una funcion del utils.js
*/

function averiguarDisponibilidad(lista, numero){
	let respuesta = {}

	for(let i = 0; i < lista.length; i++){
		const elLibro = lista[i]

		const ISBN = elLibro.ISBN

		if(ISBN === numero){

			respuesta = {
				titulo: elLibro.titulo,
				autor: elLibro.autor,
				disponibilidad: laDisponibilidadEnCuestion(elLibro)
			}
		}
	}
	return respuesta
}

///////////////////

/*
la funcion recibe la lista de libros y el nombre de un autor. asi como las demas, posee un array vacio definido al principio,
recorre la lista, evalua el cumplimiento de dos condiciones (que el parametro autor coincida con el autor del libro y
que el libro en cuestion este disponible) y si ambas efectivamente suceden, carga al array el/los libro/s que califica/n 
para ambas condiciones.
*/

function librosDeAutor(lista, autor){
	let librosAutorEspecifico = []

	for(let i = 0; i < lista.length; i++){
		const elLibro = lista[i]
		const estado = elLibro.estado

		if(elLibro.autor === autor && laDisponibilidadEnCuestion(elLibro) === 'El libro que ingresaste esta disponible!'){
			librosAutorEspecifico.push(elLibro)
		}
	}
	return librosAutorEspecifico
}

/////////////////

/*
funcion que recibe la lista de libros, tiene un array vacio definido al principio, recorre la lista, define un acumulador
que se llenara con todos los pedidos que cada libro tuvo, se abre otra iteracion que esta vez recorre a la propiedad array
pedidos que posee cada libro para recopilar justamente la cantidad de pedidos, estos se suman al acumulador. 
Al array vacio del principio se le cargara un objeto con las propiedades titulo y el numero de veces que fue alquilado, 
armandose asi una lista de objetos con cada libro. Dado que es un ranking de los 10 mas pedidos, se ordenara esa lista 
usando el metodo sort y luego se seleccionara a los primeros diez elementos 
*/

function losMasPedidos(lista) {
	const losPedidos = []

	for(let i = 0; i < lista.length; i++){
		const elLibro = lista[i]

		let pedidosContabilizados = 0

		for(let j = 0; j < elLibro.pedidos.length; j++){
			pedidosContabilizados = pedidosContabilizados + 1
		}

		losPedidos.push({
			titulo: elLibro.titulo,
			vecesAlquilado: pedidosContabilizados,
		})
	}

	const rankingOrdenado = losPedidos.sort(function(a, b){
		return b.vecesAlquilado - a.vecesAlquilado
	})

	return rankingOrdenado.slice(0, 10)
}
