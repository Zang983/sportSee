import styles from "./spinner.module.scss"
export default function Spinner() {
    return (
        <div className={styles.contain}>
            <span className={styles.loader}>
            </span>
            <p>Chargement</p>
        </div>



    )
}