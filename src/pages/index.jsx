import styles from './styles/index.module.scss'
import { Link } from 'react-router-dom'

function Index() {

  return (
    <div className={styles.index}>
        <h1>Sélectionner un utilisateur</h1>
        <ul>
          <li><Link to={"/user/12"}>Utilisateur 12</Link></li>
          <li><Link to={"/user/18"}>Utilisateur 18</Link></li>
          <li><Link to={"/user/20"}>Utilisateur inéxistant</Link></li>
          <li><Link to={"/user/mocked"}>Utilisateur mocké</Link></li>
        </ul>
    </div>
  )
}

export default Index
