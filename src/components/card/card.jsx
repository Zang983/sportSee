import styles from './card.module.scss'
import PropTypes from 'prop-types';


export default function Card({image,data,type}) {
    return (
        <div className={styles.card}>
            <img src={image} alt=""/>
            <div>
                <p className={styles.data}>{data}</p>
                <p>{type}</p>
            </div>

        </div>
)}

Card.propTypes = {
    image: PropTypes.string,
    type : PropTypes.string,
    data : PropTypes.string
}