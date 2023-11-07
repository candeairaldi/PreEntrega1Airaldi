import { FaShoppingCart } from "react-icons/fa";

export const CartWidget = () => {
    return (
        <div className="d-flex" >
            <FaShoppingCart color="black" size={25} />
            <span>0</span>
        </div>
    )
}
