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
esta funcion tiene como objetivo representar la planilla abierta al publico que 
desea alquilar un libro. ellos ingresaran el isbn correspondiente al libro
que buscan y la funcion les devolvera el estado(disponible o no disponible) del mismo al recorrer la lista de los libros, encontrar el libro indicado y chequear su estado. al mismo tiempo les brindara unos datos de contacto con la gente de la libreria para concretar el pedido o avisar que buscan un libro que actualmente no esta disponible. por otro lado esta funcion modificara la prop de la lista "pedidos", la cual funciona como un contador para saber cuántas veces fue requerido tal libro, aumentando en una unidad su valor. esa propiedad despues me servira para establecer los libros mas pedidos
*/

function planillaPublica(lista, numero) {
	let estadoDelLibro = []


	for(let i = 0; i < libros.length; i++){
		const libro = libros[i]	
		const estado = libro.estado

		if(numero === libro.ISBN && estado === 'disponible'){
			estadoDelLibro.push(`El libro "${libro.titulo}" que buscas esta ${libro.estado}!`)
			console.log('Para terminar con tu pedido podes comunicarte al numero 4988-0456 de Lunes a Viernes de 08hs a 18hs o los fines de semana de 10hs a 16hs')	
		} else if(numero === libro.ISBN && estado === 'no disponible'){
			estadoDelLibro.push(`Lo sentimos! El libro "${libro.titulo}" que buscas esta ${libro.estado} :(`)
			console.log('Si deseas que lo encarguemos comunicate al numero 4988-0456 de Lunes a Viernes de 08hs a 18hs o los fines de semana de 10hs a 16hs')
		}
	}
	return estadoDelLibro
}

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
