import { useEffect } from 'react'

import styles from './styles/error.module.scss'
import getData from '../data/getData.js'

function Error() {

  useEffect(() => {
    getData();
  })

  return (
    <div className={styles.error}>
        <h1>404</h1>
    </div>
  )
}

export default Error
