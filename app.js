// Simulador de Carrito

class guitarras {
    constructor(nombre, tipo, precio) {
        this.nombre = nombre
        this.tipo = tipo
        this.precio = precio
    }
}

const guitarras1 = new guitarras('Guitarra Fender Classic Design', 'acustica', 106.673)
const guitarras2 = new guitarras('Guitarra Yamaha Slg200nw Silent Nt Natural', 'Electroacústica', 244.293)
const guitarras3 = new guitarras('Guitarra Epiphone Les Paul Special VE', 'eléctrica', 53.515)

const carrito = []


const mostrarMensaje = (guitarras) => {
    alert('La guitarra ' + guitarras.nombre + ' del tipo ' + guitarras.tipo + ' cuesta $' + guitarras.precio)
}


const totalCarrito = () => {
    let sumaTotal = 0
    carrito.forEach((producto) => {
        sumaTotal += producto.precio
    })
    return sumaTotal
}

const guitarrasParabusqueda = [{
        nombre: 'guitarra fender'
    },
    {
        nombre: 'guitarra yamaha'
    },
    {
        nombre: 'guitarra epiphone'
    },
]



alert('Hola bienvenido a nuestra tienda de Guitarras')

alert('Esta es nuestra de lista de guitarras')

alert('Elegi una guitarra entre: \n1. guitarra fender  \n2. guitarra yamaha  \n3. guitarra epiphone ')

const agregarProducto = () => {

    let guitarraDisponible = true;

    while (guitarraDisponible) {
        const ingresaUsuario = prompt('busque su guitarra preferida:').toLowerCase()
        productoElegido = guitarrasParabusqueda.filter((guitar) => guitar.nombre.includes(ingresaUsuario))

        if (productoElegido.length > 0) {
            switch (productoElegido[0].nombre) {
                case 'guitarra fender':
                    mostrarMensaje(guitarras1)
                    carrito.push(guitarras1)
                    guitarraDisponible = false
                    break
                case 'guitarra yamaha':
                    mostrarMensaje(guitarras2)
                    carrito.push(guitarras2)
                    guitarraDisponible = false
                    break
                case 'guitarra epiphone':
                    mostrarMensaje(guitarras3)
                    carrito.push(guitarras3)
                    guitarraDisponible = false
                    break
                default:
                    alert('Por favor, ingresa una opcion correcta')
                    break
            }

        }else{
            alert('Por favor, ingresa una opcion correcta')
        }



    }



    if (confirm('Desea agregar otro producto?')) {
        agregarProducto()
    } else {
        alert('Finalizo Compra, su total es de $' + totalCarrito())
        console.log(carrito)
    }
}

agregarProducto()
alert('Muchas gracias por su Compra')