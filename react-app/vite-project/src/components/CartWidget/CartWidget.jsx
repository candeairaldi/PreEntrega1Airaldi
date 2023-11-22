import { FaShoppingCart } from "react-icons/fa";

export const CartWidget = () => {
    return (
        <div>
            <FaShoppingCart color="white" size={25} />
            <span>0</span>
        </div>
    )
}
