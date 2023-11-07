// import '../App.css'
import styles from "./item.module.css"
import '../../App.css'

export const ItemListContainer = ({ bienvenida }) => {
    return (
        <div className={styles.saludo}>
            <h1> {bienvenida} </h1>
        </div>
    )
}