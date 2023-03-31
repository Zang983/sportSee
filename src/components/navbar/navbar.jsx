import styles from './navbar.module.scss'
import yoga from '../../assets/yoga.svg'
import swim from '../../assets/swim.svg'
import cycling from '../../assets/cycling.svg'
import dumbbell from '../../assets/dumbbell.svg'

export default function Navbar() {
    return (
        <div className={styles.navbar}>        
            <nav>
            <ul>
                <li><img src={yoga} alt="" /></li>
                <li><img src={swim} alt="" /></li>
                <li><img src={cycling} alt="" /></li>
                <li><img src={dumbbell} alt="" /></li>
            </ul>
        </nav>
            <p>Copyright, SportSee 2020</p>
        </div>

    )
}

