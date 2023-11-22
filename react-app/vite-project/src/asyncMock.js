const products = [
    { id: "1", name: "Emilia Zuela", img: "../public/img/mujer5.jpg", price: 33.000, category: "calzados mujer", description: "Borcego", stock: 10 },
    { id: "2", name: "Beryn Negro", img: "../public/img/mujer6.jpg", price: 35700, category: "calzados mujer", description: "Zapato", stock: 19 },
    { id: "3", name: "Zasha Blanco", img: "../public/img/mujer7.jpg", price: 32500, category: "calzados mujer", description: "Borcego", stock: 12 },
    { id: "4", name: "Jana Suela", img: "../public/img/mujer8.jpg", price: 38200, category: "calzados mujer", description: "Borcego", stock: 3 },
    { id: "5", name: "Taylor Gris", img: "../public/img/produc1.jpg", price: 32500, category: "calzados mujer", description: "Borcego", stock: 12 },
    { id: "6", name: "Wendy Blanco", img: "../public/img/produc4.jpg", price: 38200, category: "calzados mujer", description: "Borcego", stock: 3 },
    { id: "7", name: "Nautico Irlanda", img: "../public/img/hombre4.jpg", price: 26900, category: "calzados hombre", description: "Nautico", stock: 5 },
    { id: "8", name: "Zapatilla Berlin", img: "../public/img/hombre5.jpg", price: 38700, category: "calzados hombre", description: "Zapatilla", stock: 20 },
    { id: "9", name: "Nautico Sidney", img: "../public/img/hombre6.jpg", price: 34800, category: "calzados hombre", description: "Nautico", stock: 15 },
    { id: "10", name: "Zapato Bristol", img: "../public/img/hombre7.jpg", price: 36900, category: "calzados hombre", description: "Zapato", stock: 11 },
    { id: "11", name: "Zapato NewYork", img: "../public/img/hombre1.jpg", price: 34800, category: "calzados hombre", description: "Nautico", stock: 15 },
    { id: "12", name: "Zapato Miami", img: "../public/img/hombre2.jpg", price: 36900, category: "calzados hombre", description: "Zapato", stock: 11 },
];

export const getProducts = () => {

    return new Promise( (resolve, reject) => {
        if(products.length > 0) {
            setTimeout ( () => {
                resolve ( products )
            }, 2000) // Simulamos un tiempo de respuesta
        } else {
            reject ("No hay productos")
        }
    })
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
    
        if (products.length > 0) {
            const product = products.find( p => p.id === id);
        
        setTimeout(() => {
            if(!product) {
            reject(`No se encuentra el producto con el id ${id}`)
        }
        resolve(product);
        }, 2000);
        } else {
        reject("No hay productos");
        }
    });
};