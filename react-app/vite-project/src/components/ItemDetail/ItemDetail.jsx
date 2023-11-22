import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css"

export const ItemDetail = ({ name, description, img, price, stock }) => {
    const onAdd = (items) => { 
        alert(`Se agregaron ${items} al carrito`)
    }

    return (
    <div className="border ">
        <div className="cardd ">
        <div className="cardd-body ">
            <img className="fot" src={img} alt="" />
            <h3 className="card-tittle">{name}</h3>
            <p className="card-textt"> {description} </p>
            <p><b>Precio:</b> {price} </p>
            <ItemCount stock={stock} onAdd={onAdd} />
        </div>
        </div>
    </div>
    );
};