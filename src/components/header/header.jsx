import logo from '../../assets/logo.svg'
import styles from './header.module.scss'

export default function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="" />
            <ul>
                <li><a href="/">Accueil</a></li>
                <li>Profil</li>
                <li>Réglage</li>
                <li>Communauté</li>
            </ul>
        </header>)
}

