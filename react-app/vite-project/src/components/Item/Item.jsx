import { Link } from "react-router-dom"
import "./Item.css"

export const Item = ({id, name, img}) => {
  return (
    <div>
    <div className="card ">
        <div className="card-body ">
            <h5 className="card-title">{name}</h5>
            <img className="foto" src={img} alt="" />
            <Link to={`/item/${id}`}>
                <button className="btn btn-outline-success">Detalles</button>
            </Link>
        </div>
    </div>
  </div>
  )
}
