import { useEffect } from 'react'
import styles from './styles/index.module.scss'
import getData from '../data/getData.js'

function Index() {

  useEffect(() => {
  })

  return (
    <div className={styles.index}>
        <h1>Sélectionner un utilisateur</h1>
        <ul>
          <li><a href="/user/12">Utilisateur 12</a></li>
          <li><a href="/user/18">Utilisateur 18</a></li>
          <li><a href="/user/mocked">Utilisateur mocké</a></li>
        </ul>
    </div>
  )
}

export default Index
