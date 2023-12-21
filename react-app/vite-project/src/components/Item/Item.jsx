import { Link } from "react-router-dom"
import "./Item.css"
import React, { useState } from 'react';
import { ItemCount } from "../ItemCount/ItemCount";
import { useCart } from "../../context/CartContext";

export const Item = ({id, name, img, price, stock, description}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const { addItem } = useCart();
    const onAdd = (items) => {
      addItem({
        id,
        name,
        price,
        stock,
        description,
      }, items);

      }
    

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  return (
    
      <div className="card ">
        <div className="card-body ">
          <h5 className="card-title">{name}</h5>
          <img className="foto" src={img} alt="" />
          <h5 className="precio">{price}</h5>
          <div className="item-info">          
          <Link to={`/item/${id}`}>
            <button className="btn btn-outline-success"> Ver Detalles</button>
          </Link>
          <ItemCount onAdd={onAdd} stock={stock} />
          </div> 
        </div>
      </div>
  );
};