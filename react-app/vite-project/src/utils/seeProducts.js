import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/configfirebase";

const products = [
    {  name: "Emilia Zuela", img: "../public/img/mujer5.jpg", price: 33.000, category: "calzados mujer", description: "Borcego", stock: 10 },
    {  name: "Beryn Negro", img: "../public/img/mujer6.jpg", price: 35700, category: "calzados mujer", description: "Zapato", stock: 19 },
    {  name: "Zasha Blanco", img: "../public/img/mujer7.jpg", price: 32500, category: "calzados mujer", description: "Borcego", stock: 12 },
    {  name: "Jana Suela", img: "../public/img/mujer8.jpg", price: 38200, category: "calzados mujer", description: "Borcego", stock: 3 },
    {  name: "Taylor Gris", img: "../public/img/produc1.jpg", price: 32500, category: "calzados mujer", description: "Borcego", stock: 12 },
    {  name: "Wendy Blanco", img: "../public/img/produc4.jpg", price: 38200, category: "calzados mujer", description: "Borcego", stock: 3 },
    {  name: "Nautico Irlanda", img: "../public/img/hombre4.jpg", price: 26900, category: "calzados hombre", description: "Nautico", stock: 5 },
    {  name: "Zapatilla Berlin", img: "../public/img/hombre5.jpg", price: 38700, category: "calzados hombre", description: "Zapatilla", stock: 20 },
    {  name: "Nautico Sidney", img: "../public/img/hombre6.jpg", price: 34800, category: "calzados hombre", description: "Nautico", stock: 15 },
    {  name: "Zapato Bristol", img: "../public/img/hombre7.jpg", price: 36900, category: "calzados hombre", description: "Zapato", stock: 11 },
    {  name: "Zapato NewYork", img: "../public/img/hombre1.jpg", price: 34800, category: "calzados hombre", description: "Nautico", stock: 15 },
    {  name: "Zapato Miami", img: "../public/img/hombre2.jpg", price: 36900, category: "calzados hombre", description: "Zapato", stock: 11 },
];


export const seeProducts = () => { 

products.forEach( product => {
    addDoc( collection( db, "products"), product )
} )

};
