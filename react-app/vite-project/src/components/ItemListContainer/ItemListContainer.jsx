import styles from "./item.module.css"
import '../../App.css'

export const ItemListContainer = ({ greetings }) => {
    return (
        <div className={styles.saludo}>
            <h1> {greetings} </h1>
        </div>
    )
}