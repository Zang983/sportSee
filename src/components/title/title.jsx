import styles from './title.module.scss'
import PropTypes from 'prop-types'

export default function Title({ name }) {
    return (
        <div>
            <h1 className={styles.title}>
                Bonjour <span className={styles.red}>{name}</span>
            </h1>
            <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
        </div>

    )
}

Title.propTypes = {
    name : PropTypes.string
}