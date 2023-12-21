import { ItemCount } from "../ItemCount/ItemCount";
import { useCart } from "../../context/CartContext";
import "./ItemDetail.css"

export const ItemDetail = ({ id, name, description, img, price, stock }) => {
    const { addItem } = useCart();

    const onAdd = (items) => {
      addItem({
        id,
        name,
        description,
        img,
        price,
        stock
      }, items);
  
      };
    
  
    return (
      <div className="border">
        <div className="cardd">
          <div className="cardd-body ">
            <img className="fot" src={img} alt="" />
            <h3 className="card-tittle">{name}</h3>
            <div className="card-textt">
              <p>{description}</p>
            </div>
            <p><b>Precio:</b> $ {price}</p>
            <ItemCount stock={stock} onAdd={onAdd} />
          </div>
        </div>
      </div>
    );
  };



