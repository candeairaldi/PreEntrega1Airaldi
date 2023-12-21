import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from 'sweetalert2';
import "./cart.css"

//Carrito
export const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, totalCartItems, removeItem, updateItemQuantity } = useContext(CartContext);

  
  const handleConfirmOrder = () => {
    if (cartItems.length === 0) {
      Swal.fire({
        title: "Carrito vacio",
        text: "No hay productos agregados",
        icon: "error"
      });

    } else {
      navigate("/terminar-compra");
    }
  };
  
  return (
    <div className="tittle">
      <h2>Carrito</h2>
      <div>
        {cartItems.map((item) => (
          <div className="container-carrito" key={item.id}>
            <p>Nombre: {item.name}</p>
            <p>Precio: ${item.price}</p>
            <p>Cantidad: {item.quantity}</p>
            <div className="subtotal">
              <div><button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>- Quitar</button></div>
              <div><p> Subtotal: ${item.subTotal}</p></div>
              <div><button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+ Agregar</button></div>
          </div>
            <button onClick={() => removeItem(item.id)}>
              Eliminar
            </button>
          </div>
        ))}
      </div>
      <p>Suma total: ${totalCartItems}</p>

      <button className="button-final" onClick={handleConfirmOrder}>Terminar Compra</button>
    </div>
  );
}