import { CartWidget } from '../../components';
import { Link } from "react-router-dom";
import "./NavBar.css"


export const NavBar = () => {
    return (
        <>
    <nav className="navbar">
        <div ><h1 className="logo">Karla Calzados</h1></div>
        <div className="menu">
        <Link to={"/"}>
        <button className="menu-nav">Inicio</button>
        </Link>
            <Link to={"/category/calzados mujer"}>  
            <button className="menu-nav">Mujer</button>
            </Link>
            <Link to={"/category/calzados hombre"}> 
            <button className="menu-nav">Hombre</button>
            </Link>
        </div>
        <div className="cart-widget">
        <CartWidget />
        </div>
    </nav>
    </>
    );
};