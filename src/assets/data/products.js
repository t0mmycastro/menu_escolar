
import productVegano from '../images/productos-veganos.jpg'
import productEstandar from '../images/productos-estandar.jpg'
import productCeliacos from '../images/productos-celiacos.jpg'
import productCaloricos from '../images/productos-caloricos.jpg'
import productAutoctonos from '../images/productos-autoctonos.jpg'

const products = [
    {
        id: "01",
        productName: "Productos veganos",
        imgUrl: productVegano,
        category: "vegan",
        height: 200
    },
    {
        id: "02",
        productName: "Productos estandar",
        imgUrl: productEstandar,
        category: "estandar",
        height: 200
    },
    {
        id: "03",
        productName: "Productos celiacos",
        imgUrl: productCeliacos,
        category: "celiacos",
        height: 200
    },
    {
        id: "04",
        productName: "Productos caloricos",
        imgUrl: productCaloricos,
        category: "caloricos",
        height: 200
    },
    {
        id: "05",
        productName: "Productos autoctonos",
        imgUrl: productAutoctonos,
        category: "autoctonos",
        height: 200
    },  
]

export default products;