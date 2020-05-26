/*
	libros: lista de objetos libros
	{
		titulo: '',
		autor: '',
		anio:,
		editorial: '',
		ISBN:,		
		pedidos: [
			{
				fecha: '',
				estado: 'disponible',
			},
		]
	},
*/

const libros = [
	{
		titulo: 'Los siete locos',
		autor: 'Roberto Arlt',
		anio: 1929,
		editorial: 'Barenhaus',
		ISBN: 9789874109040,		
		pedidos: [
			{
				fecha: '01/05/2020',
				estado: 'disponible',
			},
			{
				fecha: '03/05/2020',
				estado: 'disponible',
			},
			{
				fecha: '07/05/2020',
				estado: 'disponible',
			},
			{
				fecha: '10/05/2020',
				estado: 'disponible',
			},
			{
				fecha: '12/06/2020',
				estado: 'disponible',
			},
			{
				fecha: '15/06/2020',
				estado: 'disponible',
			},
			{
				fecha: '18/06/2020',
				estado: 'disponible',
			},
		]
	},

	{
		titulo: 'Los lanzallamas',
		autor: 'Roberto Arlt',
		anio: 1931,
		editorial: 'Barenhaus',
		ISBN: 9789874109088,		
		pedidos: [
			{
				fecha: '02/07/2020',
				estado: 'disponible',
			},
			{
				fecha: '04/07/2020',
				estado: 'disponible',
			},
			{
				fecha: '08/07/2020',
				estado: 'disponible',
			},
			{
				fecha: '12/08/2020',
				estado: 'disponible',
			},
			{
				fecha: '17/08/2020',
				estado: 'no disponible',
			},
			{
				fecha: '22/08/2020',
				estado: 'disponible',
			},
		]
	},

	{
		titulo: 'El juguete rabioso',
		autor: 'Roberto Arlt',
		anio: 1926,
		editorial: 'Barenhaus',
		ISBN: 9789874109019,		
		pedidos: [
			{
				fecha: '17/01/2020',
				estado: 'disponible',
			},
		]
	},
	/////////

	{
		titulo: 'La hora sin sombra',
		autor: 'Osvaldo Soriano',
		anio: 1995,
		editorial: 'Seix Barral',
		ISBN: 9789507314117,		
		pedidos: [
			{
				fecha: '05/03/2020',
				estado: 'disponible',
			},
			{
				fecha: '10/03/2020',
				estado: 'disponible',
			},
			{
				fecha: '17/06/2020',
				estado: 'disponible',
			},
		]	
	},

	{
		titulo: 'Arqueros, ilusionistas y goleadores',
		autor: 'Osvaldo Soriano',
		anio: 1998,
		editorial: 'Seix Barral',
		ISBN: 9789507315039,		
		pedidos: [
			{
				fecha: '05/09/2020',
				estado: 'disponible',
			},
			{
				fecha: '09/09/2020',
				estado: 'disponible',
			},
			{
				fecha: '10/09/2020',
				estado: 'disponible',
			},
			{
				fecha: '17/10/2020',
				estado: 'disponible',
			},
			{
				fecha: '20/10/2020',
				estado: 'disponible',
			},
		]
	},

	{
		titulo: 'Triste, solitario y final',
		autor: 'Osvaldo Soriano',
		anio: 1973,
		editorial: 'Planeta',
		ISBN: 9789504930419,		
		pedidos: [
			{
				fecha: '18/09/2020',
				estado: 'disponible',
			},
		]	
	},
	//////////

	{
		titulo: 'El libro de arena',
		autor: 'Jorge Luis Borges',
		anio: 1975,
		editorial: 'Debolsillo',
		ISBN: 9789875666719,		
		pedidos: [
			{
				fecha: '26/05/2020',
				estado: 'no disponible',
			},
		]
	},
	//////////

	{
		titulo: 'El hombre que amaba a los perros',
		autor: 'Leonardo Padura',
		anio: 2009,
		editorial: 'Tusquets',
		ISBN: 9788483835777,		
		pedidos: [
			{
				fecha: '15/03/2020',
				estado: 'disponible',
			},
			{
				fecha: '20/03/2020',
				estado: 'disponible',
			},
			{
				fecha: '22/03/2020',
				estado: 'disponible',
			},
			{
				fecha: '25/03/2020',
				estado: 'disponible',
			},
			{
				fecha: '27/04/2020',
				estado: 'disponible',
			},
			{
				fecha: '28/04/2020',
				estado: 'disponible',
			},
			{
				fecha: '30/04/2020',
				estado: 'disponible',
			},
			{
				fecha: '31/04/2020',
				estado: 'disponible',
			},
		]
	},
	//////////

	{
		titulo: 'Boquitas pintadas',
		autor: 'Manuel Puig',
		anio: 1969,
		editorial: 'Planeta',
		ISBN: 9789877670226,		
		pedidos: [
			{
				fecha: '19/07/2020',
				estado: 'disponible',
			},
			{
				fecha: '25/09/2020',
				estado: 'disponible',
			},
		]
	},

		{
		titulo: 'El beso de la mujer arania',
		autor: 'Manuel Puig',
		anio: 1976,
		editorial: 'Booket',
		ISBN: 9789875805446,		
		pedidos: [
			{
				fecha: '05/01/2020',
				estado: 'disponible',				
			},
			{
				fecha: '08/01/2020',
				estado: 'disponible',
			},
			{
				fecha: '10/01/2020',
				estado: 'disponible',
			},
			{
				fecha: '12/01/2020',
				estado: 'disponible',
			},
			{
				fecha: '15/01/2020',
				estado: 'disponible',
			},
			{
				fecha: '20/02/2020',
				estado: 'disponible',
			},
			{
				fecha: '25/02/2020',
				estado: 'disponible',
			},
			{
				fecha: '28/02/2020',
				estado: 'disponible',
			},
			{
				fecha: '30/02/2020',
				estado: 'no disponible',
			},
		]
	},
	//////////

	{
		titulo: 'El guardian entre el centeno',
		autor: 'J. D. Salinger',
		anio: 1951,
		editorial: 'Alianza',
		ISBN: 9788420674209,		
		pedidos: [
			{
				fecha: '19/11/2020',
				estado: 'disponible',
			},
			{
				fecha: '25/11/2020',
				estado: 'disponible',
			},
			{
				fecha: '27/12/2020',
				estado: 'disponible',
			},
			{
				fecha: '30/11/2020',
				estado: 'disponible',
			},
		]
	},

	{
		titulo: 'Franny y Zooey',
		autor: 'J. D. Salinger',
		anio: 1961,
		editorial: 'Edhasa',
		ISBN: 9788435009126,		
		pedidos: [
			{
				fecha: '24/04/2020',
				estado: 'disponible',
			},
		]
	},
	///////////

	{
		titulo: 'El lobo estepario',
		autor: 'Herman Hesse',
		anio: 1927,
		editorial: 'Lumen',
		ISBN: 9788426400598,		
		pedidos: [
			{
				fecha: '01/10/2020',
				estado: 'disponible',
			},
			{
				fecha: '12/05/2020',
				estado: 'disponible',
			},
		]
	},
]


console.log(averiguarDisponibilidad(libros, 9789875666719)) //no devuelto
console.log(averiguarDisponibilidad(libros, 9788426400598)) //disponible


console.log(librosDeAutor(libros, 'Roberto Arlt')) //los tres disponibles
console.log(librosDeAutor(libros, 'Manuel Puig')) //Mi favorito no esta disponible


console.log(losMasPedidos(libros)) //la lista de los diez



