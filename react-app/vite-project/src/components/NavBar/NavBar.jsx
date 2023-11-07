import { CartWidget } from '../../components';
import '../../App.css'


export const NavBar = () => {
    return (
        <>
    <nav className="navbar">
        <div className="logo">Karla Calzados</div>
        <div className="menu">
            <a className="menu-nav" href="">Inicio</a>
            <a className="menu-nav" href="">Mujer</a>
            <a className="menu-nav" href="">Hombre</a>
        </div>
        <div className="cart-widget">
        <CartWidget />
        </div>
    </nav>
    </>
    );
};